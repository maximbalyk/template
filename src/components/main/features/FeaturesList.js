import React, {Component} from 'react';

class FeaturesList extends Component {
    render() {
        return (
            <>
                <div className="features--1">
                    <h3 className="features__title-small">Sound & Music</h3>
                    <ul className="features__list">
                        <li className="features__link">Feel-in-chest Base Power</li>
                        <li className="features__link">Lossless Digital Audio Transmission</li>
                        <li className="features__link">Easy & Stable Stereo Pairing</li>
                        <li className="features__link">Crisp and Clear High Frequency Sound</li>
                        <li className="features__link">Streams from Cloud Music and Local Library</li>
                        <li className="features__link">Auto Music Playback from Last Song Stopped</li>
                    </ul>
                </div>

                <div className="features--2">
                    <h3 className="features__title-small">Connectivity</h3>
                    <ul className="features__list">
                        <li className="features__link">Hands Free Wireless Audio</li>
                        <li className="features__link">Bluetooth 4.0 LE</li>
                        <li className="features__link">Wi-Fi 2.4 GHz (802.11 b/g/n)</li>
                        <li className="features__link">Smart Multiroom System Set Up</li>
                        <li className="features__link">Party Mode with 6.0 Units and above</li>
                        <li className="features__link">Powerful MESHNET Multi Speaker Network</li>
                    </ul>
                </div>

                <div className="features--3">
                    <h3 className="features__title-small">App Features</h3>
                    <ul className="features__list">
                        <li className="features__link">Customize Music Schedule</li>
                        <li className="features__link">Wake Up with Favorite Songs</li>
                        <li className="features__link">Home Detection Auto Wake Up</li>
                        <li className="features__link">Color Wheel & Saturation Change</li>
                    </ul>
                </div>
            </>
    );
    }
}

export default FeaturesList;