import React, { Component } from "react";
import Carousel from "./Carousel";
import { FeatureItemView } from "./FeatureItemView";
import { featuresData, featurelistUkr } from "../../../api/featuresData";
import { withTranslation } from "react-i18next";
import i18n from "i18next";

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTablet: false,
            imageUrl: null,
            error: false,
        };

        this.updatePredicate = () => {
            this.setState({ isTablet: window.innerWidth < 768 });
        }
    }
    async componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);

        try {
            const url =
                "https://ksr-ugc.imgix.net/assets/005/452/746/41c15e233144105f258c254fc8f1f17b_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1456828798&gif-q=50&q=92&s=f911ca65e3310a403ccf4f79eed90ad7";
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Error loading image: ${response.status}`);
            }

            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            this.setState({ loading: false, imageUrl });
            console.log("Image loaded");
        } catch (e) {
            console.log("Error loading image", e);
            this.setState({ loading: false, error: true });
        }
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
