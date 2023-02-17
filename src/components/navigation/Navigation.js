import React from "react";
import { Link } from "react-scroll"

export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="desktop desktop__menu">
                <ul className="desktop__menu">
                    <li className="desktop__menu-item">
                        <Link
                            className="desktop__menu-link"
                            to="presentation"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            OUR STORY
                        </Link>
                    </li>
                    <li className="desktop__menu-item">
                        <Link
                            className="desktop__menu-link"
                            to="aboutUS"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            ABOUT US
                        </Link>
                    </li>
                    <li className="desktop__menu-item">
                        <Link
                            className="desktop__menu-link"
                            to="technology"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            TECHNOLOGY
                        </Link>
                    </li>
                    <li className="desktop__menu-item">
                        <Link
                            className="desktop__menu-link"
                            to="features"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            FEATURES
                        </Link>
                    </li>
                    <li className="desktop__menu-item">
                        <Link
                            className="desktop__menu-link"
                            to="questions"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            GET IN TOUCH
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
