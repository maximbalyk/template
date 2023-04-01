import React, { useState } from "react";
import { Benefit } from "./Benefit";
import benefitsJSON from "../../../api/benefits.json";

export const Benefits = () => {
    const [benefits] = useState(benefitsJSON);

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
};