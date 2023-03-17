import React, { Component } from "react";
import martin from "../../../images/martin.png";
import { withTranslation } from "react-i18next";

class TestimonialsView extends Component {
    render() {
        const { t } = this.props;
        return (
            <section className="testimonials">
                <div className="testimonials__quote">
                    <p className="testimonials__text">{t("testimonials")}</p>
                </div>
                <img className="testimonials__avatar" src={martin} alt={t("name")} />
                <p className="testimonials__name">{t("name")}</p>
                <p className="testimonials__position">{t("position")}</p>
            </section>
        );
    }
}

export default withTranslation()(TestimonialsView);
