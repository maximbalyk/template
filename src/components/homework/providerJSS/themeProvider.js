import { createTheming, createUseStyles } from "react-jss";
import React from "react";
export const themes = {
    light: {
        background: "#eeeeee",
        backgroundElement: "#ccc",
        backgroundElementActive: "#adadb0",
        backgroundButtonHover: "rgb(103 159 230)",
        color: "#19191d",
        url: "url(https://picstatio.com/u/7faeaf/death-star-astronaut-art.jpg)",
    },
    dark: {
        background: "#19191d",
        backgroundElement: "#25252b",
        backgroundElementActive: "#4a4a4c",
        backgroundButtonHover: "rgb(246 10 55 / 41%)",
        color: "#eeeeee",
        url: "url(https://picstatio.com/u/5eeb9f/kylo-ren-star-wars-artwork-4k.jpg)",
    },
};

export const ThemeContext = React.createContext(themes.dark);
export const theming = createTheming(ThemeContext);
export const useStyles = createUseStyles(
    {
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
            "& :hover": {
                backgroundColor: ({ theme }) => theme.backgroundButtonHover,
                cursor: "pointer",
            },
            "& :active": {
                transform: "translateY(2px)",
            },
        },
    },
    { theming }
);