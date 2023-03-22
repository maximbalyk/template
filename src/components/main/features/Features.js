import React, { Component } from "react";
import Carousel from "./Carousel";
import { FeatureItemView } from "./FeatureItemView";
import { featuresData, featurelistUkr } from "../../../api/featuresData";
import { withTranslation } from "react-i18next";
import i18n from "i18next";
import { URL_FOR_IMAGE } from "../../../assets/constants";

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTablet: false,
            imageUrl: URL_FOR_IMAGE,
            error: false,
        };

        this.updatePredicate = () => {
            this.setState({ isTablet: window.innerWidth < 768 });
        }
    }
    async componentDidMount() {
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
        const { isTablet,imageUrl } = this.state;
        let dataForRender =
            i18n.language === "en" ? featuresData : featurelistUkr;
        const { t } = this.props;
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
                        ></Carousel>
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
    }
}

export default withTranslation()(Features);
