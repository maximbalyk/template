import React from "react";
import logo from "../../images/logo.svg";
import toTop from "../../images/to-top.svg";
import { Link } from "react-scroll";
import FooterLinkItem from "./FooterLinkItem";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <a href="/#" className="logo">
                    <img src={logo} className="logo__img" alt="Crazy Baby" />
                </a>

                <Link className="footer__to-top" to="header">
                    <img src={toTop} alt="Back to top" />
                </Link>
            </div>

            <ul className="footer__list">
                <FooterLinkItem
                    link="https://facebook.com/"
                    className="footer__link--facebook"
                />
                <FooterLinkItem
                    link="https://twitter.com/"
                    className="footer__link--twitter"
                />
                <FooterLinkItem
                    link="https://www.instagram.com/"
                    className="footer__link--instagram"
                />
            </ul>
            <p className="footer__terms">
                © 2019 All rights reserved. Terms of Use & Privacy Policy
            </p>
        </footer>
    );
};
