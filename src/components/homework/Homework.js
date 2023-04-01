import React, { useState } from "react";
import StarWars from "./starwars/StarWars";
import Modal from "../modal/Modal";
import { Biography } from "./biography/Biography";
import "./homework.scss";
import { ThemeContext, themes } from "../provider/ThemeProvider";

const Homework = () => {
    const [modalActive, setModalActive] = useState(false);
    const [isDark, setIsDark] = useState(true);
    let themeVersion = isDark ? themes.dark : themes.light;
    return (
        <>
            <ThemeContext.Provider value={themeVersion}>
                <div className="button__wrapper">
                    <button
                        className="btn"
                        onClick={() => setModalActive(true)}
                        style={{
                            background: themeVersion.background,
                            color: themeVersion.color,
                        }}
                    >
                        Biography
                    </button>
                    <button
                        className="btn"
                        onClick={() => {
                            setIsDark(!isDark);
                        }}
                        style={{
                            background: themeVersion.background,
                            color: themeVersion.color,
                        }}
                    >
                        {isDark
                            ? "Change theme to light"
                            : "Change theme to dark"}
                    </button>

                    <a
                        href="/template"
                        className="btn"
                        style={{
                            background: themeVersion.background,
                            color: themeVersion.color,
                        }}
                    >
                        To project
                    </a>
                </div>

                <Modal active={modalActive} setActive={setModalActive}>
                    <Biography />
                </Modal>
                <StarWars />
            </ThemeContext.Provider>
        </>
    );
};

export default Homework;
