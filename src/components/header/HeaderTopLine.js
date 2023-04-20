import React, { useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";
import i18n from "i18next";

export const HeaderTopLine = ({ openMenu }) => {
    const [isEnActive, setIsEnActive] = useState(
        localStorage.getItem("lng") === "en"
    );

    const handleChangeLng = () => {
        i18n.language === "en"
            ? i18n.changeLanguage("ua")
            : i18n.changeLanguage("en");

        localStorage.setItem("lng", i18n.language);
    };
    return (
        <div className="header__top">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="header__menu-icon">
                <button className="header__menu-btn" onClick={openMenu}>
                    <img src={menu} alt="menu-icon" />
                </button>
            </div>

            <div className="header__buttons">
                <a className="header__button ">SPECS</a>
                <a
                    className={
                        isEnActive
                            ? "header__button header__button--active"
                            : "header__button"
                    }
                    onClick={() => {
                        setIsEnActive(!isEnActive);
                        handleChangeLng();
                    }}
                >
                    EN
                </a>
                <a className="header__button">/</a>
                <a
                    className={
                        isEnActive
                            ? "header__button"
                            : "header__button header__button--active"
                    }
                    onClick={() => {
                        setIsEnActive(!isEnActive);
                        handleChangeLng();
                    }}
                >
                    UA
                </a>
                <a href="/homework" className="header__button--buy">
                    Homework
                </a>
            </div>
        </div>
    );
};
