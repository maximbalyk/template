import "./App.css";
import "./styles/main.scss";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";
import Biography from "./components/navigation/Biography";
import React, { useState } from "react";

function App() {
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
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
}

export default App;
