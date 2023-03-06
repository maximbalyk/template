import React from "react";
import martin from "../../../images/martin.png";

function TestimonialsView({ testimonials, name, position }) {
    return (
        <section className="testimonials">
            <div className="testimonials__quote">
                <p className="testimonials__text">
                    {testimonials}
                </p>
            </div>
            <img
                className="testimonials__avatar"
                src={martin}
                alt={name}
            />
            <p className="testimonials__name">{name}</p>
            <p className="testimonials__position">{position}</p>
        </section>
    );
}

export default TestimonialsView;