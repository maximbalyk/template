import React, { useState } from "react";
import StarWars from "./starwars/StarWars";
import Modal from "../modal/Modal";
import { Biography } from "./biography/Biography";
import "./homework.scss";
import { ThemeProvider } from "react-jss";
import { themes, useStyles } from "./providerJSS/themeProvider";

const Homework = () => {
    const [modalActive, setModalActive] = useState(false);
    const [isDark, setIsDark] = useState(true);

    let themeVersion = isDark ? themes.dark : themes.light;
    let classes = useStyles({ theme: themeVersion });
    return (
        <>
            <ThemeProvider theme={themeVersion}>
                <div className={classes.btnSection}>
                    <button
                        className={classes.btn}
                        onClick={() => setModalActive(true)}
                    >
                        Biography
                    </button>
                    <button
                        className={classes.btn}
                        onClick={() => {
                            setIsDark(!isDark);
                        }}
                    >
                        {isDark
                            ? "Change theme to light"
                            : "Change theme to dark"}
                    </button>

                    <a href="/template" className={classes.btn}>
                        To project
                    </a>
                </div>

                <Modal active={modalActive} setActive={setModalActive}>
                    <Biography />
                </Modal>
                <StarWars />
            </ThemeProvider>
        </>
    );
};

export default React.memo(Homework);
