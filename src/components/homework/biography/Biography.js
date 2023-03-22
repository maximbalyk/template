import { Component } from "react";
import data from "../../../api/api.json";
import { bubbleSort, generateDeal, generateNewPeople } from "./helper";
import ButtonSection from "./ButtonSection";
import TableBio from "./TableBio";

class Biography extends Component {
    constructor() {
        super();
        this.state = {
            data: [...data],
            sortedData: [...data],
            increase: true,
            currentID: null,
            currentElementID: null,
            prevElementID: null,
            currentItem: null,
        };
    }
    dragStartHandler = (e, item) => {
        this.setState({ currentItem: item });
    };

    dragOverHandler = (e) => {
        e.preventDefault();
    };

    dropHandler = (e, item) => {
        e.preventDefault();
        this.setState(({ currentItem, sortedData }) => {
            const dataForDrop = [...sortedData];

            if (currentItem !== item.id) {
                [dataForDrop[currentItem.id - 1], dataForDrop[item.id - 1]] = [
                    dataForDrop[item.id - 1],
                    dataForDrop[currentItem.id - 1],
                ];
                return { sortedData: dataForDrop };
            }
        });
    };

    componentDidMount() {
        document.addEventListener("keydown", this.detectKeyDown, true);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.detectKeyDown, true);
    }

    detectKeyDown = (e) => {
        this.setState(({ currentID, sortedData }) => {
            const index = sortedData.findIndex((item) => item.id === currentID);
            const nextElement = sortedData[index + 1];
            const prevElement = sortedData[index - 1];
            if (e.key === "ArrowDown" && nextElement) {
                return {
                    currentID: nextElement.id,
                    currentElementID: null,
                };
            } else if (e.key === "ArrowUp" && prevElement) {
                return {
                    currentID: prevElement.id,
                    currentElementID: null,
                };
            }
        });
    };

    handleSort = () => {
        let sortedList = this.state.sortedData.sort((a, b) => {
            return this.state.increase
                ? b.birthYear - a.birthYear
                : a.birthYear - b.birthYear;
        });

        this.setState({
            sortedList: sortedList,
            increase: !this.state.increase,
        });
    };
    handlePureSort = () => {
        const compareByBirthYear = (person1, person2) => {
            return this.state.increase
                ? person2.birthYear - person1.birthYear
                : person1.birthYear - person2.birthYear;
        };
        this.setState(({ sortedData }) => ({
            sortedData: bubbleSort(sortedData, compareByBirthYear),
            increase: !this.state.increase,
        }));
    };
    handleReset = () => {
        this.setState(({ data }) => ({
            sortedData: data,
            currentID: null,
        }));
    };
    addNewBio = () => {
        this.setState((prevState) => ({
            sortedData: [...prevState.sortedData, generateNewPeople()],
        }));
    };
    deleteBio = () => {
        this.setState(({ sortedData, currentID }) => ({
            sortedData: sortedData.filter((person) => person.id !== currentID),
            currentID: null,
        }));
    };
    deleteElementBio = () => {
        this.setState(({ currentID, currentElementID, sortedData }) => {
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
            return {
                sortedData: result,
                currentElementID: null,
            };
        });
    };
    addElementBio = () => {
        this.setState(({ currentID, sortedData }) => {
            let result = sortedData.map((person) => {
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
            return {
                sortedData: result,
                currentElementID: null,
            };
        });
    };

    choosePeople = (item) => {
        this.setState(({ currentID }) => ({
            currentID: currentID !== item.id ? item.id : null,
            currentElementID: null,
        }));
    };
    chooseBio = (e, peopleItem, bioItem) => {
        e.stopPropagation();
        this.setState(({ currentElementID }) => ({
            currentID: peopleItem.id,
            currentElementID: currentElementID !== bioItem ? bioItem : null,
        }));
    };

    render() {
        const { currentID, currentElementID, sortedData } = this.state;
        return (
            <div id="style-2">
                <ButtonSection
                    buttonDescription={[
                        [this.handleSort, "Sort"],
                        [this.handlePureSort, "Sort without sort method"],
                        [this.addNewBio, "Add new bio of person"],
                        [this.deleteBio, "Delete bio of person"],
                        [this.deleteElementBio, "Delete element from bio"],
                        [this.addElementBio, "Add element to bio"],
                        [this.handleReset, "Reset"],
                    ]}
                />
                <TableBio
                    sortedData={sortedData}
                    currentID={currentID}
                    currentElementID={currentElementID}
                    choosePeople={this.choosePeople}
                    chooseBio={this.chooseBio}
                    dragStartHandler={this.dragStartHandler}
                    dragOverHandler={this.dragOverHandler}
                    dropHandler={this.dropHandler}
                />
            </div>
        );
    }
}
export default Biography;
