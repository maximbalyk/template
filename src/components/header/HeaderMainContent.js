import React  from "react";
import wirelessSpeaker_original from "../../images/wirelessSpeaker_original.svg";
import { useTranslation } from "react-i18next";

export const HeaderMainContent = () => {
    const { t } = useTranslation();

    return (
        <div className="grid ">
            <div className="grid__item--blink">
                <img
                    src={wirelessSpeaker_original}
                    alt="wirelessSpeakers"
                    className="header__content-image"
                />
            </div>

            <div className=" grid__item--1-3 grid__item--desktop-1-4">
                <h1 className="header__title">{t("header")}</h1>
                <p className="header__content-text grid__item--desktop-1-3">
                    {t("headerContent")}
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
    );
};