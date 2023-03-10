import React from "react";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";
import { Link } from "react-scroll";

const HeaderTopLine = ({openMenu}) => {

    return (
        <div className="header__top">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="header__menu-icon">
                <button
                    className="header__menu-btn"
                    onClick={openMenu}
                >
                    <img src={menu} alt="menu-icon" />
                </button>
            </div>

            <div className="header__buttons">
                <Link
                    className="header__button "
                    to="specs"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    SPECS
                </Link>
                <Link
                    className="header__button header__button--active"
                    to="en"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    EN
                </Link>

                <Link
                    className="header__button"
                    to="ua"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    UA
                </Link>
                <a
                    href="/homework"
                    className="header__button--buy"
                >
                    Homework
                </a>
            </div>
        </div>
    );
}

export default HeaderTopLine;
