import React, { Component } from "react";
import technologyImageDesktop from "../../../images/technologyImageDesktop.png";
import { withTranslation } from "react-i18next";

class Technology extends Component {
    render() {
        const {t} = this.props
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
    }
}

export default withTranslation()(Technology);
