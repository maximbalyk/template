import React, { Component } from "react";
import TestimonialsView from "./TestimonialsView";

class Testimonials extends Component {
    state = {
        testimonials:
            "“It really took me by surprise honestly to have such\n" +
            "full beautiful sound that coming out of this small\n" +
            "compact device. And with the brush aluminum surface, it\n" +
            "feels so familiar. Like my iPhone.”",
        name: "Garrett Martin",
        position: "Creative Director",
    };

    render() {
        const {testimonials, name, position} = this.state
        return (
            <TestimonialsView
                keys={name}
                testimonials={testimonials}
                name={name}
                position={position}
            />
        );
    }
}

export default Testimonials;
