import React, {Component} from 'react';
import intro from "../../video/intro.mp4";
import aboutUsVideo from "../../images/about-usVideo.png";

class Presentation extends Component {
    render() {
        return (
            <section className="presentation" id="presentation">
                <video
                    className="video video__full-width"
                    src={intro}
                    poster={aboutUsVideo}
                    controls
                >
                </video>
            </section>
        );
    }
}

export default Presentation;