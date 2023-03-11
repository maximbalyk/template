import React, { useState } from "react";
import StarWars from "./starwars/StarWars";
import Modal from "../modal/Modal";
import Biography from "./biography/Biography";
import "./homework.scss";

const Homework = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <div className="button__wrapper">
                <button className="btn" onClick={() => setModalActive(true)}>
                    Biography
                </button>
                <a href="/template" className="btn">
                    To project
                </a>
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
                <Biography />
            </Modal>
            <StarWars />
        </>
    );
};

export default Homework;
