import React, { Component } from "react";
import martin from "../../images/martin.png";

class Testimonials extends Component {
    render() {
        return (
            <section className="testimonials">
                <div className="testimonials__quote">
                    <p className="testimonials__text">
                        “It really took me by surprise honestly to have such
                        full beautiful sound that coming out of this small
                        compact device. And with the brush aluminum surface, it
                        feels so familiar. Like my iPhone.”
                    </p>
                </div>
                <img
                    className="testimonials__avatar"
                    src={martin}
                    alt="Garrett Martin"
                />
                <p className="testimonials__name">Garrett Martin</p>
                <p className="testimonials__position">Creative Director</p>
            </section>
        );
    }
}

export default Testimonials;
