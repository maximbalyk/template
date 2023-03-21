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
        const { benefits } = this.state;
        return (
            <section className="benefits">
                {benefits.map((benefit) => (
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
