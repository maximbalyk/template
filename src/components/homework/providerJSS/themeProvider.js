import { createTheming, createUseStyles } from "react-jss";
import { ThemeContext } from "../../provider/ThemeProvider";
export const theming = createTheming(ThemeContext);
export const useStyles = createUseStyles(
    {
        table: {
            minWidth: "100%",
            borderCollapse: "collapse",
        },
        thArticle: {
            color: ({ theme }) => theme.color,
        },
        wrapper: {
            display: "flex",
            height: "100vh",
            flexDirection: "column",
            backgroundRepeat: "no-repeat, repeat",
            backgroundSize: "cover",
            backgroundImage: ({ theme }) => theme.url,
            justifyContent: "flex-start",
            alignItems: "center",
            overflowY: "hidden",
            "@media (max-width: 768px)": {
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                height: "100%",
            },
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
        btnSection: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "center",
            transition: "1s",
            backgroundColor: ({ theme }) => theme.background,
        },
        btn: {
            backgroundColor: ({ theme }) => theme.backgroundElement,
            color: ({ theme }) => theme.color,
            display: "inline-block",
            border: "none",
            padding: "10px 20px",
            margin: 3,
            lineHeight: "16px",
            borderRadius: "5px",
            textDecoration: "none",
            transition: "all 1s ease",
            fontSize: "16px",
            "&:hover": {
                backgroundColor: ({ theme }) => theme.backgroundButtonHover,
                cursor: "pointer",
            },
            "&:active": {
                transform: "translateY(2px)",
            },
        },
    },
    { theming }
);
