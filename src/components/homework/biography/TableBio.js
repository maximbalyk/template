import React from "react";
import { useTheme } from "../Homework";
import { useStyles } from "../providerJSS/themeProvider";
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
    const theme = useTheme();
    const classes = useStyles({ theme });
    return (
        <table className={classes.table}>
            <thead className="table-heading">
                <tr>
                    <th className={classes.thArticle}>Name</th>
                    <th className={classes.thArticle}>Birth Year</th>
                    <th className={classes.thArticle}>Biography</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((item) => (
                    <tr
                        className={
                            currentID === item.id
                                ? [classes.bio, classes.bioActive]
                                : classes.bio
                        }
                        onClick={() => {
                            choosePeople(item);
                        }}
                        key={item.id}
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
                                            currentElementID === bio &&
                                            currentID === item.id
                                                ? classes.bioElActive
                                                : classes.bioEl
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
