import { useEffect, useState } from "react";
import dataApi from "../../../api/api.json";
import { bubbleSort, generateDeal, generateNewPeople } from "./helper";
import ButtonSection from "./ButtonSection";
import TableBio from "./TableBio";

export const Biography = () => {
    const [data, setData] = useState([...dataApi]);
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

    const handleSort = () => {
        let sortedList = sortedData.sort((a, b) => {
            return increase
                ? b.birthYear - a.birthYear
                : a.birthYear - b.birthYear;
        });
        setSortedData(sortedList);
        setIncrease(!increase);
    };

    const handlePureSort = () => {
        const compareByBirthYear = (person1, person2) => {
            return increase
                ? person2.birthYear - person1.birthYear
                : person1.birthYear - person2.birthYear;
        };
        setSortedData(bubbleSort(sortedData, compareByBirthYear));
        setIncrease(!increase);
    };

    const handleReset = () => {
        setSortedData(data);
        setCurrentID(null);
    };

    const addNewBio = () => {
        setSortedData((prevState) => [...prevState, generateNewPeople()]);
    };

    const deleteBio = () => {
        setSortedData((sortedData) =>
            sortedData.filter((person) => person.id !== currentID)
        );
        setCurrentID(null);
    };

    const deleteElementBio = () => {
        let result = sortedData.map((person) => {
            if (person.id === currentID) {
                const filteredBio = Object.fromEntries(
                    Object.entries(person.bio).filter(
                        ([key, value]) => value !== currentElementID
                    )
                );
                return { ...person, bio: filteredBio };
            }
            return person;
        });
        setSortedData(result);
        setCurrentElementID(null);
    };
    const addElementBio = () => {
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
    };

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
    }, [currentID, sortedData]);

    return (
        <div>
            <ButtonSection
                buttonDescription={[
                    [handleSort, "Sort"],
                    [handlePureSort, "Sort without sort method"],
                    [addNewBio, "Add new bio of person"],
                    [deleteBio, "Delete bio of person"],
                    [deleteElementBio, "Delete element from bio"],
                    [addElementBio, "Add element to bio"],
                    [handleReset, "Reset"],
                ]}
            />
            <TableBio
                sortedData={sortedData}
                currentID={currentID}
                currentElementID={currentElementID}
                choosePeople={choosePeople}
                chooseBio={chooseBio}
                dragStartHandler={dragStartHandler}
                dragOverHandler={dragOverHandler}
                dropHandler={dropHandler}
            />
        </div>
    );
};