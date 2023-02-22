import React, { Component } from "react";
import Benefit from "./Benefit";
import benefits from "../../../api/benefits.json";

class Benefits extends Component {
    constructor() {
        super();
        this.state = {
            benefits: benefits,
        };
    }

    render() {
        const benefitsForRender = this.state.benefits;
        return (
            <section className="benefits">
                {benefitsForRender.map((benefit) => (
                    <Benefit
                        key={benefit.benefitName}
                        logoUrl={benefit.logoUrl}
                        benefitName={benefit.benefitName}
                        description={benefit.description}
                    ></Benefit>
                ))}
            </section>
        );
    }
}

export default Benefits;
