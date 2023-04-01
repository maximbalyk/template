import React, { useContext } from "react";
import Button from "./Button";
import { ThemeContext } from "../../provider/ThemeProvider";
const ButtonSection = ({ buttonDescription}) => {
    const theme = useContext(ThemeContext);
    return (
        <div className="biography__btn-section"
             style={{ background: theme.background, color: theme.color}}
        >
            {buttonDescription.map(button =>(
                <Button key={button[1]} onClick={button[0]} text={button[1]}/>
            ))}
        </div>
    );
};

export default ButtonSection;