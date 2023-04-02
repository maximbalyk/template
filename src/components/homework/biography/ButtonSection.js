import React from "react";
import Button from "./Button";
import { useTheme } from "../Homework";
import { useStyles } from "../providerJSS/themeProvider";
const ButtonSection = ({ buttonDescription}) => {
    const theme = useTheme()
    const classes = useStyles({ theme})
    return (
        <div className={classes.btnSection}
        >
            {buttonDescription.map(button =>(
                <Button key={button[1]} onClick={button[0]} text={button[1]}/>
            ))}
        </div>
    );
};

export default ButtonSection;