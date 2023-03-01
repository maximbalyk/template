import { Component } from "react";

class Biography extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortColumn: null,
            sortDirection: null,
        };
    }

    handleSort = (column) => {
        const { sortColumn, sortDirection } = this.state;
        let direction = "asc";
        if (sortColumn === column && sortDirection === "asc") {
            direction = "desc";
        }
        this.setState({
            sortColumn: column,
            sortDirection: direction,
        });
    };

    render() {
        const { data } = this.props;
        const { sortColumn, sortDirection } = this.state;

        let sortedData = [...data];
        if (sortColumn !== null) {
            sortedData.sort((a, b) => {
                let valA = a[sortColumn];
                let valB = b[sortColumn];
                if (sortColumn === "birthYear") {
                    valA = parseInt(valA);
                    valB = parseInt(valB);
                }
                if (valA < valB) {
                    return sortDirection === "asc" ? -1 : 1;
                } else if (valA > valB) {
                    return sortDirection === "asc" ? 1 : -1;
                } else {
                    return 0;
                }
            });
        }

        return (
            <table>
                <thead>
                <tr>
                    <th onClick={() => this.handleSort("id")}>
                        ID
                        {sortColumn === "id" && (
                            <span>{sortDirection === "asc" ? " ▲" : " ▼"}</span>
                        )}
                    </th>
                    <th onClick={() => this.handleSort("name")}>
                        Name
                        {sortColumn === "name" && (
                            <span>{sortDirection === "asc" ? " ▲" : " ▼"}</span>
                        )}
                    </th>
                    <th onClick={() => this.handleSort("birthYear")}>
                        Birth Year
                        {sortColumn === "birthYear" && (
                            <span>{sortDirection === "asc" ? " ▲" : " ▼"}</span>
                        )}
                    </th>
                    <th>Bio</th>
                </tr>
                </thead>
                <tbody>
                {sortedData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.birthYear}</td>
                        <td>
                            <ul>
                                {Object.entries(item.bio).map(([year, bio]) => (
                                    <li key={year}>
                                        <strong>{year}:</strong> {bio}
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default Biography