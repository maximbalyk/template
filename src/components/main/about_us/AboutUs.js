import React from "react";
import aboutUsImages from "../../../images/about-usImage.png";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

export const AboutUs = () => {
    const { t } = useTranslation();

    return (
        <section className="about-us" id="aboutUS">
            <h2 className="about-us__title">{t("DESIGNED FOR THE FUTURE")}</h2>

            <img src={aboutUsImages} alt="about" className="about-us__image" />
            <p className="about-us__text">
                {t("DESIGNED FOR THE FUTURE Description")}
            </p>
            <div className="about-us__container">
                <Link
                    className="about-us__link "
                    to="header"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    {t("See more about us")}
                </Link>
            </div>
        </section>
    );
};
