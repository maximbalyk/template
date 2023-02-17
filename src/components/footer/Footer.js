import React from "react";
import logo from "../../images/logo.svg";
import toTop from "../../images/to-top.svg";
import { Link } from "react-scroll";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__logo">
                    <a href="/#" className="logo">
                        <img
                            src={logo}
                            className="logo__img"
                            alt="Crazy Baby"
                        />
                    </a>

                    <Link className="footer__to-top" to="header">
                        <img src={toTop} alt="Back to top" />
                    </Link>
                </div>

                <ul className="footer__list">
                    <li className="footer__item">
                        <a
                            href="https://facebook.com/"
                            className="footer__link footer__link--facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                        </a>
                    </li>
                    <li className="footer__item">
                        <a
                            href="https://twitter.com/"
                            className="footer__link footer__link--twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                        </a>
                    </li>
                    <li className="footer__item">
                        <a
                            href="https://www.instagram.com/"
                            className="footer__link footer__link--instagram"
                            target="_blank"
                            rel="noopener noreferrer"
                        >

                        </a>
                    </li>
                </ul>
                <p className="footer__terms">
                    © 2019 All rights reserved. Terms of Use & Privacy Policy
                </p>
            </footer>
        );
    }
}
