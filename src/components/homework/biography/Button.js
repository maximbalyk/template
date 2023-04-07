import React from "react";
import { useTheme } from "react-jss";
import { useStyles } from "../providerJSS/themeProvider";

const Button = ({ onClick, text }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    return (
        <button className={classes.btn} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
