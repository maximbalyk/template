import React, { Component } from "react";
import wirelessSpeaker_original from "../../images/wirelessSpeaker_original.svg";

class HeaderMainContent extends Component {
    render() {
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
                    <h1 className="header__title">
                        Futuristic Wireless Speaker
                    </h1>
                    <p className="header__content-text grid__item--desktop-1-3">
                        Luna’s performance is balanced and smooth in all
                        frequency ranges which makes the music both naturally
                        pleasant and distinctly more layered.
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
    }
}

export default HeaderMainContent;
