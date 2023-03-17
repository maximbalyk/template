import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class QuestionsView extends Component {
    render() {
        const { t } = this.props;
        return (
            <section className="questions" id="questions">
                <div className="grid">
                    <h2 className="questions__title grid__item--1-4 grid__item--desktop-2-6">
                        {t("QUESTIONS")}
                    </h2>
                    <form
                        action="src/components/main"
                        className="grid__item--5-8 grid__item--desktop-8-10"
                    >
                        <input
                            required
                            name="email"
                            type="email"
                            placeholder={t("Your email")}
                            className="questions__field"
                        />
                        <textarea
                            required
                            name="message"
                            placeholder={t("Your message")}
                            className="questions__field questions__textarea"
                        />
                        <button className="questions__button">{t("SEND")}</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default withTranslation()(QuestionsView);
