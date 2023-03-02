import { Component } from "react";
import data from "../../api/api.json";

class Biography extends Component {
    state = {
        data: [...data],
        sortedData: [...data],
        increase: true,
        currentID: null,
        currentElementID: null,
    };

    handleSort() {
        let sortedList = this.state.sortedData.sort((a, b) => {
            return this.state.increase
                ? b.birthYear - a.birthYear
                : a.birthYear - b.birthYear;
        });

        this.setState({
            sortedList: sortedList,
            increase: !this.state.increase,
        });
    }
    handlePureSort() {
        const people = JSON.parse(JSON.stringify(this.state.sortedData));
        people.sort = function (callback = compareByBirthYear) {
            let count;
            do {
                count = 0;
                for (let i = 1; i < people.length; i++) {
                    const prev = this[i - 1];
                    const current = this[i];
                    if (callback(prev, current) > 0) {
                        count++;
                        this[i - 1] = current;
                        this[i] = prev;
                    }
                }
            } while (count > 0);

            return this;
        };
        const compareByBirthYear = (person1, person2) => {
            return this.state.increase
                ? person2.birthYear - person1.birthYear
                : person1.birthYear - person2.birthYear;
        };
        const result = people.sort(compareByBirthYear);
        this.setState({
            sortedData: result,
            increase: !this.state.increase,
        });
    }
    handleReset() {
        this.setState({
            sortedData: [...this.state.data],
            currentID: null,
        });
    }

    addNewBio() {
        let minYear = 1970;
        let maxYear = 2005;
        let newYear = Math.floor(Math.random() * (maxYear - minYear)) + minYear;

        let newPerson = {
            id: Math.random(),
            name: "Анна",
            birthYear: newYear,
            bio: {
                1990: "Народилась у Львові.",
                2008: "Вступила до Львівського університету.",
                2012: "Закінчила університет та почала працювати в IT-компанії.",
                2020: "Стала керівником відділу розробки.",
            },
        };

        let name;
        switch (true) {
            case newPerson.birthYear > 2000:
                name = "Богдана";
                break;
            case newPerson.birthYear > 1990:
                name = "Інна";
                break;
            case newPerson.birthYear > 1980:
                name = "Петро";
                break;
            case newPerson.birthYear > 1970:
                name = "Анна";
                break;
            default:
                name = "Саша";
        }
        newPerson.name = name;

        this.setState({
            sortedData: [...this.state.sortedData, newPerson],
        });
    }
    deleteBio() {
        let result = this.state.sortedData.filter((person) => {
            return person.id !== this.state.currentID;
        });

        this.setState({
            sortedData: result,
            currentID: null,
        });
    }
    deleteElementBio() {
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
    }
    addElementBio() {
        console.log(this.state);
        const { currentID, sortedData } = this.state;
        let minYear = 1970;
        let maxYear = 2005;
        let newYear = Math.floor(Math.random() * (maxYear - minYear)) + minYear;
        let number = Math.floor(Math.random() * 100000000);
        let deal;
        switch (true) {
            case newYear > 2000:
                deal = `Нарахував ${number} зірок`;
                break;
            case newYear > 1990:
                deal = `З'їв ${number}  мікро піц`;
                break;
            case newYear > 1980:
                deal = `Прожив ${number} секунд`;
                break;
            case newYear > 1970:
                deal = `Проспав ${number} секунд`;
                break;
            default:
                deal = "Став керівником відділу продажів в пекарні";
        }

        let result = sortedData.map((person) => {
            if (person.id === currentID) {
                return { ...person, bio: { ...person.bio, [newYear]: deal } };
            }

            return person;
        });

        this.setState({
            sortedData: result,
            currentElementIDID: null,
        });

        console.log("---------------------------------------------t");
    }
    render() {
        const sortedData = this.state.sortedData;
        const { currentID, currentElementID } = this.state;
        return (
            <>
                <div>
                    <div className="biography__btn-section">
                        <button
                            onClick={() => this.handleSort()}
                            className="biography__btn"
                        >
                            Sort
                        </button>
                        <button
                            onClick={() => this.handlePureSort()}
                            className="biography__btn"
                        >
                            Sort without sort method
                        </button>
                        <button
                            onClick={() => this.addNewBio()}
                            className="biography__btn"
                        >
                            Add new bio of person
                        </button>
                        <button
                            onClick={() => this.deleteBio()}
                            className="biography__btn"
                        >
                            Delete bio of person
                        </button>
                        <button
                            onClick={() => this.deleteElementBio()}
                            className="biography__btn"
                        >
                            Delete element from bio
                        </button>
                        <button
                            onClick={() => this.addElementBio()}
                            className="biography__btn"
                        >
                            Add element to bio
                        </button>
                        <button
                            onClick={() => this.handleReset()}
                            className="biography__btn"
                        >
                            Reset
                        </button>
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
                                        this.setState({
                                            currentID: item.id,
                                        });
                                    }}
                                    key={item.id}
                                    style={{
                                        background:
                                            currentID === item.id
                                                ? "#999"
                                                : "white",
                                    }}
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
                                                        style={{
                                                            background:
                                                                currentElementID === bio
                                                                    ? "rgb(124 124 127)"
                                                                    : "none",
                                                        }}
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
                </div>

            </>
        );
    }
}

export default Biography;
