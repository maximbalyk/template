import React from "react";
import "../../styles/blocks/modal.scss";
import { useTheme } from "react-jss";
import { useStylesModal } from "./ModalProvider";

const Modal = ({ active, setActive, children }) => {
    const theme = useTheme();
    const classes = useStylesModal({ theme });
    return (
        <div
            className={active ?  classes.active  : classes.modal}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? classes.modalContentActive : classes.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
export default Modal;
