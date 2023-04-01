import React from "react";
import { Benefits } from "./benefits/Benefits";
import Presentation from "./presentation/Presentation";
import { AboutUs } from "./about_us/AboutUs";
import { Technology } from "./technology/Technology";
import { Testimonials } from "./testimonials/Testimonials";
import { Features } from "./features/Features";
import { QuestionsView } from "./questions/QuestionsView";

export const Main = () => {
    return (
        <main className="main">
            <Benefits />
            <Presentation />
            <AboutUs />
            <Technology />
            <Testimonials />
            <Features />
            <QuestionsView />
        </main>
    );
};
