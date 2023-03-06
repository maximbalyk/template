import React from "react";

export const FeatureItemView = ({ name, features, className = "features--1" }) => {
    return(
        <div className={className}>
            <h3 className="features__title-small">
                {name}
            </h3>
            <ul className="features__list">
                {features.map(feature => (
                    <li key={feature} className="features__link">
                        {feature}
                    </li>
                ))}
            </ul>
        </div>

    )
}