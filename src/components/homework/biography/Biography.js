import { useCallback, useEffect, useMemo, useState } from "react";
import dataApi from "../../../api/api.json";
import { bubbleSort, generateDeal, generateNewPeople } from "./helper";
import { ButtonSection } from "./ButtonSection";
import TableBio from "./TableBio";

export const Biography = () => {
    const [data] = useState([...dataApi]);
    const [sortedData, setSortedData] = useState([...dataApi]);
    const [increase, setIncrease] = useState(true);
    const [currentID, setCurrentID] = useState(null);
    const [currentElementID, setCurrentElementID] = useState(null);
    const [currentItem, setCurrentItem] = useState(null);
    const detectKeyDown = (e) => {
        const index = sortedData.findIndex((item) => item.id === currentID);
        const nextElement = sortedData[index + 1];
        const prevElement = sortedData[index - 1];
        if (e.key === "ArrowDown" && nextElement) {
            setCurrentID(nextElement.id);
            setCurrentElementID(null);
        } else if (e.key === "ArrowUp" && prevElement) {
            setCurrentID(prevElement.id);
            setCurrentElementID(null);
        }
    };

    const dragStartHandler = (e, item) => {
        setCurrentItem(item);
    };
    const dragOverHandler = (e) => {
        e.preventDefault();
    };
    const dropHandler = (e, item) => {
        e.preventDefault();
        const dataForDrop = [...sortedData];
        if (currentItem !== item.id) {
            [dataForDrop[currentItem.id - 1], dataForDrop[item.id - 1]] = [
                dataForDrop[item.id - 1],
                dataForDrop[currentItem.id - 1],
            ];
            setSortedData(dataForDrop);
        }
    };

    const handleSort = useCallback(() => {
        let sortedList = sortedData.sort((a, b) => {
            return increase
                ? b.birthYear - a.birthYear
                : a.birthYear - b.birthYear;
        });
        setSortedData(sortedList);
        setIncrease(!increase);
    }, [increase, sortedData]);

    const addNewBio = useCallback(() => {
        setSortedData((prevState) => [...prevState, generateNewPeople()]);
    },[]);

    const handlePureSort = useCallback(() => {
        const compareByBirthYear = (person1, person2) => {
            return increase
                ? person2.birthYear - person1.birthYear
                : person1.birthYear - person2.birthYear;
        };
        setSortedData(bubbleSort(sortedData, compareByBirthYear));
        setIncrease(!increase);
    }, [increase, sortedData]);

    const handleReset = useCallback(() => {
        setSortedData(data);
        setCurrentID(null);
    }, [data]);

    const deleteBio = useCallback(() => {
        setSortedData((sortedData) =>
            sortedData.filter((person) => person.id !== currentID)
        );
        setCurrentID(null);
    }, [sortedData, currentID]);

    const deleteElementBio = useCallback(() => {
        let result = sortedData.map((person) => {
            if (person.id === currentID) {
                const filteredBio = Object.fromEntries(
                    Object.entries(person.bio).filter(
                        ([, value]) => value !== currentElementID
                    )
                );
                return { ...person, bio: filteredBio };
            }
            return person;
        });
        setSortedData(result);
        setCurrentElementID(null);
    }, [sortedData, currentID, currentElementID]);

    const addElementBio = useCallback(() => {
        const result = sortedData.map((person) => {
            if (person.id === currentID) {
                return {
                    ...person,
                    bio: {
                        ...person.bio,
                        [generateDeal()[1]]: generateDeal()[0],
                    },
                };
            }
            return person;
        });
        setSortedData(result);
        setCurrentElementID(null);
    }, [sortedData, currentID]);
    const choosePeople = (item) => {
        setCurrentID(currentID !== item.id ? item.id : null);
        setCurrentElementID(null);
    };
    const chooseBio = (e, peopleItem, bioItem) => {
        e.stopPropagation();
        setCurrentID(peopleItem.id);
        setCurrentElementID(currentElementID !== bioItem ? bioItem : null);
    };

    useEffect(() => {
        document.addEventListener("keydown", detectKeyDown, true);
        return () => {
            document.removeEventListener("keydown", detectKeyDown, true);
        };
    }, []);
    const buttonDescription = useMemo(
        () => [
            [handleSort, "Sort"],
            [handlePureSort, "Sort without sort method"],
            [addNewBio, "Add new bio of person"],
            [deleteBio, "Delete bio of person"],
            [deleteElementBio, "Delete element from bio"],
            [addElementBio, "Add element to bio"],
            [handleReset, "Reset"],
        ],
        [
            handleSort,
            handlePureSort,
            addNewBio,
            deleteBio,
            deleteElementBio,
            addElementBio,
            handleReset,
        ]
    );

    return (
        <>
            <ButtonSection buttonDescription={buttonDescription} />
            <TableBio
                sortedData={sortedData}
                setSortedData={setSortedData}
                currentID={currentID}
                currentElementID={currentElementID}
                choosePeople={choosePeople}
                chooseBio={chooseBio}
                dragStartHandler={dragStartHandler}
                dragOverHandler={dragOverHandler}
                dropHandler={dropHandler}
            />
        </>
    );
};
