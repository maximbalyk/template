import React, { useState } from "react";
import benefitDesign from "../../../images/benefitDesign.png";
import benefitSpeakerSystem from "../../../images/benefitSpeakerSystem.png";
import benefitMultiroom from "../../../images/benefitMultiroom.png";
import benefitLighting from "../../../images/benefitLighting.png";
import { useTranslation } from "react-i18next";
export const Benefit = ({  benefitName, logoUrl }) => {
    const [imageMap] = useState({
        benefitDesign: benefitDesign,
        benefitSpeakerSystem: benefitSpeakerSystem,
        benefitMultiroom: benefitMultiroom,
        benefitLighting: benefitLighting,
    });
    const { t } = useTranslation();
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
};