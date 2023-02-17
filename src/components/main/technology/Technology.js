import React, { Component } from "react";
import technologyImageDesktop from "../../../images/technologyImageDesktop.png";

class Technology extends Component {
    render() {
        return (
            <section className="technology" id="technology">
                <h2 className="technology__title">technology</h2>
                <img
                    src={technologyImageDesktop}
                    alt="technology of speaker"
                    className="technology__image"
                />
            </section>
        );
    }
}

export default Technology;
