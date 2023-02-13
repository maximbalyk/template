import React, {Component} from 'react';
import benefitDesign from "../../../images/benefitDesign.png";
import benefitSpeakerSystem from "../../../images/benefitSpeakerSystem.png";
import benefitMultiroom from "../../../images/benefitMultiroom.png";
import benefitLighting from "../../../images/benefitLighting.png";
import Benefit from "./Benefit";

class Benefits extends Component {
    render() {
        return (
            <section className="benefits">
                <Benefit
                    logoUrl = {benefitDesign}
                    benefitName = "Futuristic Design"
                    description = "To give Luna a truly flawless look, we specifically
                        picked aircraft grade aluminum as its material and
                        adopted both three-dimensional stretch-bending technology
                        and a high precision cold forging technique."
                />
                <Benefit
                    logoUrl = {benefitSpeakerSystem}
                    benefitName = "Tweeter Speaker System"
                    description = "To deliver a more layered sound performance better than
                        a sole full-range speaker, our team equipped Luna with one
                        more tweeter speaker responsible for high-frequency sound independently."
                />
                <Benefit
                    logoUrl = {benefitMultiroom}
                    benefitName = "Multiroom System"
                    description = "Luna is natively compatible with your home Wi-Fi.
                        Set up multiple speakers in different rooms to expand your
                        music experience into the entire house."
                />
                <Benefit
                    logoUrl = {benefitLighting}
                    benefitName = "Intuitive Lighting System"
                    description = "An intuitive user interface allows you to adjust the hue
                        and saturation of color for lighting that fits any mood
                        and situation."
                />

            </section>

        );
    }
}


export default Benefits;