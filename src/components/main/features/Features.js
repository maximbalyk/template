import React, { Component } from "react";
import features from "../../../images/features.png";
import  Carousel  from "./Carousel";
import FeaturesList from "./FeaturesList";
import {CarouselItem} from "./CarouselItem";
import {featuresData} from './featuresData'

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
                        <Carousel
                            items={featuresData}
                            renderItem={(item, width) => (
                                <CarouselItem
                                    key={item.id}
                                    name={item.name}
                                    width={width}
                                    features={item.features}
                                />
                            )}
                        ></Carousel>
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
