import React from "react";
import Benefits from "./benefits/Benefits";
import Presentation from "./presentation/Presentation";
import AboutUs from "./about us/AboutUs";
import Technology from "./technology/Technology";
import Testimonials from "./testimonials/Testimonials";
import Features from "./features/Features";
import Questions from "./questions/Questions";

export default class Main extends React.Component {
    render() {
        return (
            <main className="main">
                <Benefits />
                <Presentation />
                <AboutUs />
                <Technology />
                <Testimonials />
                <Features />
                <Questions />
            </main>
        );
    }
}
