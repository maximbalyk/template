import React from "react";
import benefitDesign from "../../../images/benefitDesign.png";
import benefitSpeakerSystem from "../../../images/benefitSpeakerSystem.png";
import benefitMultiroom from "../../../images/benefitMultiroom.png";
import benefitLighting from "../../../images/benefitLighting.png";
import { withTranslation } from "react-i18next";
class Benefit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageMap: {
                benefitDesign: benefitDesign,
                benefitSpeakerSystem: benefitSpeakerSystem,
                benefitMultiroom: benefitMultiroom,
                benefitLighting: benefitLighting,
            },
        };

    }
    render() {
        const { t, benefitName,logoUrl } = this.props;
        const { imageMap } = this.state;
        return (
            <div className="benefit">
                <img
                    src={imageMap[logoUrl]}
                    alt="Benefit benefitDesign"
                    className="benefit__logo"
                />
                <h2 className="benefit__title">{t(`${benefitName}`)}</h2>
                <p className="benefit__text">
                    {t(`${benefitName}` + " Description")}
                </p>
            </div>
        );
    }
}

export default withTranslation()(Benefit);
