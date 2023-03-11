import React, { useState } from "react";
import StarWars from "./starwars/StarWars";
import Modal from "../modal/Modal";
import Biography from "./biography/Biography";

const Homework = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
            <>
                <button
                    className="header__button--buy--bio"
                    onClick={() => setModalActive(true)}
                >
                    Biography
                </button>
                <Modal active={modalActive} setActive={setModalActive}>
                    <Biography />
                </Modal>
                <StarWars />
            </>
        );

}

export default Homework;