import React from "react";
import { useTranslation } from "react-i18next";
import martin from "../../../images/martin.png";

export const Testimonials = () => {
    const { t } = useTranslation();

    return (
        <section className="testimonials">
            <div className="testimonials__quote">
                <p className="testimonials__text">{t("testimonials")}</p>
            </div>
            <img
                className="testimonials__avatar"
                src={martin}
                alt={t("name")}
            />
            <p className="testimonials__name">{t("name")}</p>
            <p className="testimonials__position">{t("position")}</p>
        </section>
    );
};