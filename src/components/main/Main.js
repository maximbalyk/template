import React from 'react'
import Benefits from "./Benefits";
import Presentation from "./Presentation";
import AboutUs from "./AboutUs";
import Technology from "./Technology";
import Testimonials from "./Testimonials";
import Features from "./Features";
import Questions from "./Questions";
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
