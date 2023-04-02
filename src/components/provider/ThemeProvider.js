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
