import { createUseStyles } from "react-jss";
import { theming } from "../providerJSS/themeProvider";

export const useStylesTable = createUseStyles(
    {
        table: {
            minWidth: "100%",
            borderCollapse: "collapse",
        },
        thArticle: {
            color: ({ theme }) => theme.color,
        },
        bio: {
            backgroundColor: ({ theme }) => theme.backgroundElement,
            color: ({ theme }) => theme.color,
            borderBottomColor: ({ theme }) => theme.color,
            transition: "0.3s",
            margin: "auto",
            borderBottom: "2px solid",
            "& td": {
                display: "table-cell",
                textAlign: "center",
                "&:last-child": {
                    textAlign: "start",
                    width: "50%",
                },
                "& ul": {
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    "& li": {
                        marginBottom: "5px",
                        "&:last-child": {
                            marginBottom: 0,
                        },
                        "& strong": {
                            marginRight: "5px",
                        },
                    },
                },
            },
        },
        bioActive: {
            backgroundColor: ({ theme }) => theme.backgroundElementActive,
            color: ({ theme }) => theme.color,
            borderBottomColor: ({ theme }) => theme.color,
        },
        bioEl: {
            background: "none",
            transition: "0.3s",
        },
        bioElActive: {
            backgroundColor: "#5a595e",
            transition: "0.3s",
        },
    },
    { theming }
);