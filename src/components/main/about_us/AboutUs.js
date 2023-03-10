import React, { Component } from "react";
import aboutUsImages from "../../../images/about-usImage.png";
import {Link} from "react-scroll";

class AboutUs extends Component {
    render() {
        return (
            <section className="about-us" id="aboutUS">
                <h2 className="about-us__title">DESIGNED FOR THE FUTURE</h2>

                <img
                    src={aboutUsImages}
                    alt="about"
                    className="about-us__image"
                />
                <p className="about-us__text">
                    In 2014, a group of geeky industrial designers, engineering
                    veterans and acoustic experts formed crazybaby. This is a
                    bunch of passionate people who are crazy enough to think
                    they can challenge the industry with disruptive audio
                    products.
                </p>
                <div className="about-us__container">
                    <Link
                        className="about-us__link "
                        to="header"
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        See more about us
                    </Link>
                </div>
            </section>
        );
    }
}

export default AboutUs;
