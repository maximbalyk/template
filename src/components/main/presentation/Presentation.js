import React from "react";
import aboutUsVideo from "../../../images/about-usVideo.png";
import intro from "../../../video/intro.mp4";
import playIco from "../../../images/play.png";
import WithPlayer from "./WithPlayer";
const Presentation = (props) => {
    const { handlePlay, visibility, hover, setHover, videoRef } = props;

    return (
        <section className="presentation" id="presentation">
            <video
                className="video video__full-width"
                ref={videoRef}
                poster={aboutUsVideo}
                onClick={handlePlay}
            >
                <source src={intro} />
            </video>
            <button
                className={visibility}
                onClick={handlePlay}
                onMouseEnter={() => {
                    setHover((hover) => !hover);
                }}
                onMouseLeave={() => {
                    setHover((hover) => !hover);
                }}
            >
                {hover ? <p>PLAY</p> : <img src={playIco} alt="play" />}
            </button>
        </section>
    );
};

export default WithPlayer(Presentation);
