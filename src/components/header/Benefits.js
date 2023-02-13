import React, {Component} from 'react';
import benefitDesign from "../../images/benefitDesign.png";
import benefitSpeakerSystem from "../../images/benefitSpeakerSystem.png";
import benefitMultiroom from "../../images/benefitMultiroom.png";
import benefitLighting from "../../images/benefitLighting.png";

class Benefits extends Component {
    render() {
        return (
            <section className="benefits">
                <div className="benefit">
                    <img
                        src={benefitDesign}
                        alt="Benefit benefitDesign"
                        className="benefit__logo"
                    />
                    <h2 className="benefit__title">Futuristic Design</h2>
                    <p className="benefit__text"
                    >
                        To give Luna a truly flawless look, we specifically
                        picked aircraft grade aluminum as its material and
                        adopted both three-dimensional stretch-bending technology
                        and a high precision cold forging technique.
                    </p>
                </div>
                <div className="benefit">
                    <img
                        src={benefitSpeakerSystem}
                        alt="Benefit benefitDesign"
                        className="benefit__logo"
                    />
                    <h2 className="benefit__title">Tweeter Speaker System</h2>
                    <p className="benefit__text"
                    >
                        To deliver a more layered sound performance better than
                        a sole full-range speaker, our team equipped Luna with one
                        more tweeter speaker responsible for high-frequency sound independently.
                    </p>
                </div>
                <div className="benefit">
                    <img
                        src={benefitMultiroom}
                        alt="Benefit benefitDesign"
                        className="benefit__logo"
                    />
                    <h2 className="benefit__title">Multiroom System </h2>
                    <p className="benefit__text"
                    >
                        Luna is natively compatible with your home Wi-Fi.
                        Set up multiple speakers in different rooms to expand your
                        music experience into the entire house.
                    </p>
                </div>
                <div className="benefit">
                    <img
                        src={benefitLighting}
                        alt="Benefit benefitDesign"
                        className="benefit__logo"
                    />
                    <h2 className="benefit__title">Intuitive Lighting System</h2>
                    <p className="benefit__text"
                    >
                        An intuitive user interface allows you to adjust the hue
                        and saturation of color for lighting that fits any mood
                        and situation.
                    </p>
                </div>
            </section>

        );
    }
}


export default Benefits;