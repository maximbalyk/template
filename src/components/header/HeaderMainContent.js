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
                        {this.props.header}
                    </h1>
                    <p className="header__content-text grid__item--desktop-1-3">
                        {this.props.headerContent}
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
