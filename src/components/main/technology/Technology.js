import React from "react";
import technologyImageDesktop from "../../../images/technologyImageDesktop.png";
import { useTranslation } from "react-i18next";

export const Technology = () => {
    const { t } = useTranslation();
    return (
        <section className="technology" id="technology">
            <h2 className="technology__title">{t("Technology")}</h2>
            <img
                src={technologyImageDesktop}
                alt="technology of speaker"
                className="technology__image"
            />
        </section>
    );
};
