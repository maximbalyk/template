import React from "react";
export const themes = {
    light: {
        background: "#eeeeee",
        backgroundElement: "#ccc",
        color: "#19191d",
        url: "url(https://picstatio.com/u/7faeaf/death-star-astronaut-art.jpg)"
    },
    dark: {
        background: "#19191d",
        backgroundElement: "#25252b",
        color: "#eeeeee",
        url: "url(https://picstatio.com/u/5eeb9f/kylo-ren-star-wars-artwork-4k.jpg)"
    },

};
export const ThemeContext = React.createContext(themes.dark);