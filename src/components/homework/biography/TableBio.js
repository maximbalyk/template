import React from "react";

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
    return (
        <table>
            <thead className="table-heading">
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
                                            currentElementID === bio
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
