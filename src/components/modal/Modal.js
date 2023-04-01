import React, { useContext } from "react";
import "../../styles/blocks/modal.scss";
import { ThemeContext } from "../provider/ThemeProvider";

const Modal = ({ active, setActive, children }) => {
    const theme = useContext(ThemeContext);
    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? "modal__content active" : "modal__content"}
                onClick={(e) => e.stopPropagation()}
                style={{ background: theme.background}}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
