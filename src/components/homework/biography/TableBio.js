import React, { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";

const TableBio = ({
    sortedData,
    currentID,
    currentElementID,
    choosePeople,
    dragStartHandler,
    dragOverHandler,
    dropHandler,
    chooseBio,
}) => {
    const theme = useContext(ThemeContext);
    return (
        <table>
            <thead
                className="table-heading"
            >
                <tr style={{ background: theme.background, color: theme.color}}>
                    <th>Name</th>
                    <th>Birth Year</th>
                    <th>Biography</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((item) => (
                    <tr
                        onClick={() => {
                            choosePeople(item);
                        }}
                        key={item.id}
                        className={
                            currentID === item.id
                                ? "biography__bio--active"
                                : "biography__bio"
                        }
                        draggable={true}
                        onDragStart={(e) => dragStartHandler(e, item)}
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropHandler(e, item)}
                        style={{ background: theme.background,
                            color: theme.color,
                            borderColor: theme.backgroundElement
                    }}
                    >
                        <td>{item.name}</td>
                        <td>{item.birthYear}</td>
                        <td>
                            <ul>
                                {Object.entries(item.bio).map(([year, bio]) => (
                                    <li
                                        onClick={(e) => {
                                            chooseBio(e, item, bio);
                                        }}
                                        key={`${year} ${bio}`}
                                        className={
                                            currentElementID === bio && currentID === item.id
                                                ? "biography__bio__el--active"
                                                : "biography__bio__el"
                                        }
                                    >
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
};

export default TableBio;
