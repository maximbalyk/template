import React from "react";
import logo from "../../images/logo.svg";
import menu from "../../images/menu.svg";
import wirelessSpeaker_original from "../../images/wirelessSpeaker_original.svg";
import cross from "../../images/cross.svg";
import { Link } from "react-scroll";

class Header extends React.Component {
    state = {
        activeMenu: false,
        pixel: "100%",
    };
    render() {

        return (
            <header className="header">
                <div className="header__top">
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                    </div>

                    <div className="header__menu-icon">
                        <button
                            className="header__menu-btn"
                            onClick={() => {
                                this.setState({
                                    activeMenu: !this.state.activeMenu,
                                    pixel: "0",
                                });
                            }}
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
                        <Link
                            className="header__button--buy"
                            to="questions"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Buy
                        </Link>
                    </div>
                </div>

                <div className="grid ">
                    <div className="grid__item--blink">
                        <img
                            src={wirelessSpeaker_original}
                            alt="wirelessSpeakers"
                            className="header__content-image"
                        />
                    </div>

                    <div className=" grid__item--1-3 grid__item--desktop-1-4">
                        <h1 className="header__title">
                            Futuristic Wireless Speaker
                        </h1>
                        <p className="header__content-text grid__item--desktop-1-3">
                            Luna’s performance is balanced and smooth in all
                            frequency ranges which makes the music both
                            naturally pleasant and distinctly more layered.
                        </p>
                    </div>

                    <div className="grid__item grid__item--4-8 grid__item--desktop-5-12">
                        <img
                            src={wirelessSpeaker_original}
                            alt="wirelessSpeakers"
                            className="header__content-image"
                        />
                    </div>
                </div>

                <nav
                    className="page__menu menu"
                    id="menu"
                    style={{
                        transform: `translateX(${this.state.pixel})`,
                    }}
                >
                    <div className="menu__content">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <button
                                    className="header__menu-btn"
                                    onClick={() => {
                                        this.setState({
                                            activeMenu: !this.state.activeMenu,
                                            pixel: "100%",
                                        });
                                    }}
                                >
                                    <img src={cross} alt="cross" />
                                </button>
                            </li>

                            <li className="menu__item">
                                <a href="/#presentation" className="menu__link">
                                    OUR STORY
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/#aboutUS" className="menu__link">
                                    ABOUT US
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/#technology" className="menu__link">
                                    TECHNOLOGY
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/#features" className="menu__link">
                                    FEATURES
                                </a>
                            </li>
                            <li className="menu__item">
                                <a href="/#questions" className="menu__link">
                                    GET IN TOUCH
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
