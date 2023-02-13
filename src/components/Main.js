import React from 'react'
import Benefits from "./header/Benefits";
import Presentation from "./header/Presentation";
import AboutUs from "./header/AboutUs";
import Technology from "./header/Technology";
import Testimonials from "./header/Testimonials";
import Features from "./header/Features";
import Questions from "./header/Questions";
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
    )
  }
}
