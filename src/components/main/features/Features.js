import React, { Component } from "react";
import features from "../../../images/features.png";
import { Carousel } from "./Carousel";
import FeaturesList from "./FeaturesList";

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTablet: false,
        };

        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isTablet: window.innerWidth < 768 });
    }
    render() {
        const isTablet = this.state.isTablet;
        return (
            <section className="features" id="features">
                <div className="features__container">
                    <h2 className="features__title">FEATURES</h2>
                    {isTablet ? (
                        <Carousel>
                            <div className="features--1">
                                <h3 className="features__title-small">
                                    Sound & Music
                                </h3>
                                <ul className="features__list">
                                    <li className="features__link">
                                        Feel-in-chest Base Power
                                    </li>
                                    <li className="features__link">
                                        Lossless Digital Audio Transmission
                                    </li>
                                    <li className="features__link">
                                        Easy & Stable Stereo Pairing
                                    </li>
                                    <li className="features__link">
                                        Crisp and Clear High Frequency Sound
                                    </li>
                                    <li className="features__link">
                                        Streams from Cloud Music and Local
                                        Library
                                    </li>
                                    <li className="features__link">
                                        Auto Music Playback from Last Song
                                        Stopped
                                    </li>
                                </ul>
                            </div>

                            <div className="features--2">
                                <h3 className="features__title-small">
                                    Connectivity
                                </h3>
                                <ul className="features__list">
                                    <li className="features__link">
                                        Hands Free Wireless Audio
                                    </li>
                                    <li className="features__link">
                                        Bluetooth 4.0 LE
                                    </li>
                                    <li className="features__link">
                                        Wi-Fi 2.4 GHz (802.11 b/g/n)
                                    </li>
                                    <li className="features__link">
                                        Smart Multiroom System Set Up
                                    </li>
                                    <li className="features__link">
                                        Party Mode with 6.0 Units and above
                                    </li>
                                    <li className="features__link">
                                        Powerful MESHNET Multi Speaker Network
                                    </li>
                                </ul>
                            </div>

                            <div className="features--3">
                                <h3 className="features__title-small">
                                    App Features
                                </h3>
                                <ul className="features__list">
                                    <li className="features__link">
                                        Customize Music Schedule
                                    </li>
                                    <li className="features__link">
                                        Wake Up with Favorite Songs
                                    </li>
                                    <li className="features__link">
                                        Home Detection Auto Wake Up
                                    </li>
                                    <li className="features__link">
                                        Color Wheel & Saturation Change
                                    </li>
                                </ul>
                            </div>
                        </Carousel>
                    ) : (
                        <FeaturesList />
                    )}

                    <img
                        src={features}
                        alt="features speakers"
                        className="features__image"
                    />
                </div>
            </section>
        );
    }
}

export default Features;
