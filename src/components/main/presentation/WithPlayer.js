import React, { useRef, useState } from "react";
const WithPlayer = (WrappedComponent) => {
    return function WithPlayer(props) {
        const [play, setPlay] = useState(false);
        const [hover, setHover] = useState(false);
        const videoRef = useRef();
        const visibility = play
            ? "video__button video__button--invisible"
            : "video__button video__button--visible";
        const handlePlay = () => {
            const video = videoRef.current;

            !play ? video.play() : video.pause();
            setPlay((play) => !play);
        };
        return (
            <WrappedComponent
                handlePlay={handlePlay}
                play={play}
                visibility={visibility}
                hover={hover}
                setHover={setHover}
                videoRef={videoRef}
                {...props}
            />
        );
    };
};

export default WithPlayer;