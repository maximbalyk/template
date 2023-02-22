import React from "react";

export const CarouselItem = ({ name, features }) => {
    return(
        <div className="features--1">
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