import React, { useRef, useState } from "react";
import aboutUsVideo from "../../../images/about-usVideo.png";
import intro from "../../../video/intro.mp4";
import playIco from "../../../images/play.png";
const Presentation = () => {
    const [play, setPlay] = useState(false);
    const [hover, setHover] = useState(false);
    const videoRef = useRef();
    const visibility = play
        ? "video__button video__button--invisible"
        : "video__button video__button--visible";
    const handlePlay = () => {
        if (!play) {
            videoRef.current.play();
            setPlay((play) => !play);
        } else {
            videoRef.current.pause();
            setPlay((play) => !play);
        }
    };

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
                onClick={()=> handlePlay()}
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

export default Presentation;
