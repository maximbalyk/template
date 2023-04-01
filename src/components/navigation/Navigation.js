import React from "react";
import { Link } from "react-scroll"
import { useTranslation } from "react-i18next";

export const Navigation = () => {
    const { t } = useTranslation();
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
                        {t("ourStory")}
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
                        {t("About us")}
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
                        {t("Technology")}
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
                        {t("Feature")}
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
                        {t("Get in touch")}
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
