import { Component } from "react";
import data from "../../../api/api.json";
import Button from "./Button";

class Biography extends Component {
    constructor() {
        super();
        this.state = {
            data: [...data],
            sortedData: [...data],
            increase: true,
            currentID: null,
            currentElementID: null,
            currentItem: null,
        };
    }
    dragStartHandler(e, item) {
        this.setState({ currentItem: item });
        e.target.style.background = "white";
    }

    dragLeaveHandler(e) {
        //continue experimenting
    }

    dragEndHandler(e) {
        //continue experimenting
    }

    dragOverHandler(e) {
        e.preventDefault();
    }

    dropHandler(e, item) {
        e.preventDefault();
        const { currentItem, sortedData } = this.state;
        const draggedIndex = sortedData.findIndex(
            (el) => el.id === currentItem.id
        );
        const droppedIndex = sortedData.findIndex((el) => el.id === item.id);

        if (draggedIndex !== droppedIndex) {
            [sortedData[draggedIndex], sortedData[droppedIndex]] = [
                sortedData[droppedIndex],
                sortedData[draggedIndex],
            ];
            this.setState({ sortedData });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        document.addEventListener("keydown", this.detectKeyDown, true);
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.detectKeyDown, true);
    }

    detectKeyDown = (e) => {
        const { currentID, sortedData } = this.state;
        const index = sortedData.findIndex((item) => item.id === currentID);
        const nextElement = sortedData[index + 1];
        const prevElement = sortedData[index - 1];

        if (e.key === "ArrowDown" && nextElement) {
            this.setState({
                currentID: nextElement.id,
                currentElementID: null,
            });
        } else if (e.key === "ArrowUp" && prevElement) {
            this.setState({
                currentID: prevElement.id,
                currentElementID: null,
            });
        }
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
        function deepCopy(arr) {
            if (!Array.isArray(arr)) {
                return arr;
            }

            return arr.map((obj) => {
                let copy = {};
                for (let [key, value] of Object.entries(obj)) {
                    if (Array.isArray(value)) {
                        copy[key] = deepCopy(value);
                    } else if (typeof value === "object" && value !== null) {
                        copy[key] = deepCopy(value);
                    } else {
                        copy[key] = value;
                    }
                }
                return copy;
            });
        }

        const people = deepCopy(this.state.sortedData);
        function bubbleSort(array, compare = compareByBirthYear) {
            let count;
            do {
                count = 0;
                for (let i = 1; i < array.length; i++) {
                    const prev = array[i - 1];
                    const current = array[i];
                    if (compare(prev, current) > 0) {
                        count++;
                        array[i - 1] = current;
                        array[i] = prev;
                    }
                }
            } while (count > 0);
            return array;
        }
        const compareByBirthYear = (person1, person2) => {
            return this.state.increase
                ? person2.birthYear - person1.birthYear
                : person1.birthYear - person2.birthYear;
        };
        const sortedPeople = bubbleSort(people);
        this.setState({
            sortedData: sortedPeople,
            increase: !this.state.increase,
        });
    };
    handleReset = () => {
        this.setState(({ data }) => {
            return {
                sortedData: data,
                currentID: null,
            };
        });
    };
    addNewBio = () => {
        let minYear = 1970;
        let maxYear = 2005;
        let newYear = Math.floor(Math.random() * (maxYear - minYear)) + minYear;

        let newPerson = {
            id: Math.random(),
            name: "????????",
            birthYear: newYear,
            bio: {
                1990: "???????????????????? ?? ????????????.",
                2008: "???????????????? ???? ?????????????????????? ????????????????????????.",
                2012: "?????????????????? ?????????????????????? ???? ???????????? ?????????????????? ?? IT-????????????????.",
                2020: "?????????? ???????????????????? ?????????????? ????????????????.",
            },
        };

        let name;
        switch (true) {
            case newPerson.birthYear > 2000:
                name = "??????????????";
                break;
            case newPerson.birthYear > 1990:
                name = "????????";
                break;
            case newPerson.birthYear > 1980:
                name = "??????????";
                break;
            case newPerson.birthYear > 1970:
                name = "????????";
                break;
            default:
                name = "????????";
        }
        newPerson.name = name;

        this.setState((prevState) => ({
            sortedData: [
                ...prevState.sortedData,
                newPerson
            ],
        }));
    };
    deleteBio = () => {
        const { sortedData, currentID } = this.state;

        const result = sortedData.filter(person => person.id !== currentID);

        this.setState({
            sortedData: result,
            currentID: null,
        });
    };
    deleteElementBio = () => {
        const { currentID, currentElementID, sortedData } = this.state;
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

        this.setState({
            sortedData: result,
            currentElementIDID: null,
        });
    };
    addElementBio = () => {
        const { currentID, sortedData } = this.state;
        let minYear = 1970;
        let maxYear = 2005;
        let newYear = Math.floor(Math.random() * (maxYear - minYear)) + minYear;
        let number = Math.floor(Math.random() * 100000000);
        let deal;
        switch (true) {
            case newYear > 2000:
                deal = `?????????????????? ${number} ??????????`;
                break;
            case newYear > 1990:
                deal = `??'???? ${number}  ?????????? ??????`;
                break;
            case newYear > 1980:
                deal = `???????????? ${number} ????????????`;
                break;
            case newYear > 1970:
                deal = `?????????????? ${number} ????????????`;
                break;
            default:
                deal = "???????? ???????????????????? ?????????????? ???????????????? ?? ??????????????";
        }

        let result = sortedData.map((person) => {
            if (person.id === currentID) {
                return { ...person, bio: { ...person.bio, [newYear]: deal } };
            }

            return person;
        });

        this.setState({
            sortedData: result,
            currentElementID: null,
        });
    };
    chooseBio = (item) => {
        this.setState((prevState) => {
            const { currentElementID } = this.state;
            const isSameBio = prevState.currentID === item.id;
            const isSameBioElement =
                prevState.currentElementID === currentElementID;

            if (!isSameBio) {
                return { currentID: item.id, currentElementID: null };
            } else if (isSameBio && isSameBioElement) {
                return { currentID: null, currentElementID: null };
            } else {
                return { currentID: item.id };
            }
        });
    };

    render() {
        const sortedData = this.state.sortedData;
        const { currentID, currentElementID } = this.state;
        return (
            <>
                <div className="biography__btn-section">
                    <Button onClick={this.handleSort} text={"Sort"} />
                    <Button
                        onClick={this.handlePureSort}
                        text={"Sort without sort method"}
                    />
                    <Button
                        onClick={this.addNewBio}
                        text={"Add new bio of person"}
                    />
                    <Button
                        onClick={this.deleteBio}
                        text={"Delete bio of person"}
                    />
                    <Button
                        onClick={this.deleteElementBio}
                        text={"Delete element from bio"}
                    />
                    <Button
                        onClick={this.addElementBio}
                        text={"Add element to bio"}
                    />
                    <Button onClick={this.handleReset} text={"Reset"} />
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Birth Year</th>
                                <th>Biography</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((item) => (
                                <tr
                                    onClick={() => {
                                        this.chooseBio(item);
                                    }}
                                    key={item.id}

                                    className={
                                        currentID === item.id
                                            ? "biography__bio--active"
                                            : "biography__bio"
                                    }
                                    draggable={true}
                                    onDragStart={(e) =>
                                        this.dragStartHandler(e, item)
                                    }
                                    onDragLeave={(e) =>
                                        this.dragLeaveHandler(e)
                                    }
                                    onDragEnd={(e) => this.dragEndHandler(e)}
                                    onDragOver={(e) => this.dragOverHandler(e)}
                                    onDrop={(e) => this.dropHandler(e, item)}
                                >
                                    <td>{item.name}</td>
                                    <td>{item.birthYear}</td>
                                    <td>
                                        <ul>
                                            {Object.entries(item.bio).map(
                                                ([year, bio]) => (
                                                    <li
                                                        onClick={() => {
                                                            this.setState({
                                                                currentElementID:
                                                                    bio,
                                                            });
                                                        }}
                                                        key={Math.random().toString()}
                                                        className={
                                                            currentElementID ===
                                                            bio
                                                                ? "biography__bio__el--active"
                                                                : "biography__bio__el"
                                                        }
                                                    >
                                                        <strong>{year}:</strong>{" "}
                                                        {bio}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}
export default Biography;
