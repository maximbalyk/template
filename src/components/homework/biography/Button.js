import React, { useContext } from "react";
import { ThemeContext } from "../../provider/ThemeProvider";

const Button = ({ onClick, text }) => {
    const theme = useContext(ThemeContext);

    return (
        <button className="biography__btn" onClick={onClick}
                style={{ background: theme.backgroundElement,color:theme.color}}
        >
            {text}
        </button>
    );
};

export default Button;