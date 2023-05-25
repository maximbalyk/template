import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { FeatureItemView } from "./FeatureItemView";
import { featuresData, featurelistUkr } from "../../../api/featuresData";
import i18n from "i18next";
import { URL_FOR_IMAGE } from "../../../constants/constants";
import { useTranslation } from "react-i18next";
export const Features = () => {
    const [isTablet, setIsTablet] = useState(false);
    const [imageUrl] = useState(URL_FOR_IMAGE);

    useEffect(() => {
        const updatePredicate = () => {
            setIsTablet(window.innerWidth < 768);
        };
        updatePredicate();
        window.addEventListener("resize", updatePredicate);
        return () => {
            window.removeEventListener("resize", updatePredicate);
        };
    }, []);
    const { t } = useTranslation();

    const dataForRender = i18n.language === "en" ? featuresData : featurelistUkr;

    return (
        <section className="features" id="features">
            <div className="features__container">
                <h2 className="features__title">{t("FEATURES")}</h2>
                {isTablet ? (
                    <Carousel
                        items={dataForRender}
                        renderItem={(item, width) => (
                            <FeatureItemView
                                key={item.id}
                                name={item.name}
                                width={width}
                                features={item.features}
                            />
                        )}
                    />
                ) : (
                    <>
                        {dataForRender.map((item) => (
                            <FeatureItemView
                                key={item.id}
                                features={item.features}
                                name={item.name}
                                className={item.className}
                            />
                        ))}
                    </>
                )}
                <img
                    src={imageUrl}
                    alt="features speakers"
                    className="features__image"
                />
            </div>
        </section>
    );
};