import React, { Component } from "react";
import cross from "../../images/cross.svg";
import { Link } from "react-scroll";

class HeaderNavigationMenu extends Component {
    render() {
        const { pixel, closedMenu } = this.props;
        return (
            <nav
                className="page__menu menu"
                id="menu"
                style={{
                    transform: `translateX(${pixel})`,
                }}
            >
                <div className="menu__content">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <button
                                className="header__menu-btn"
                                onClick={closedMenu}
                            >
                                <img src={cross} alt="cross" />
                            </button>
                        </li>

                        <li className="menu__item">
                            <Link
                                className="menu__link "
                                to="presentation"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                OUR STORY
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link
                                className="menu__link "
                                to="aboutUS"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                ABOUT US
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link
                                className="menu__link "
                                to="technology"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                TECHNOLOGY
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link
                                className="menu__link "
                                to="features"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                FEATURES
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link
                                className="menu__link "
                                to="questions"
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                GET IN TOUCH
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default HeaderNavigationMenu;
