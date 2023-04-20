import React, { useState } from "react";
import slideLeft from "../../../images/slide-left.svg";
import slideRight from "../../../images/slide-right.svg";
import { useSwipeable } from "react-swipeable";
import { SLIDER_WIDTH } from "../../../assets/constants";

const Carousel = ({ items, renderItem }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (currentIndex, value) =>
        Math.min(Math.max(currentIndex + value, 0), items.length - 1);

    const incrementSlide = () => setActiveIndex((prev) => updateIndex(prev, 1));
    const decrementSlide = () =>
        setActiveIndex((prev) => updateIndex(prev, -1));

    const handlers = useSwipeable({
        onSwipedLeft: incrementSlide,
        onSwipedRight: decrementSlide,
    });

    return (
        <>
            <div {...handlers} className="features__carousel">
                <div
                    {...handlers}
                    className="features__inner"
                    style={{ transform: `translate(-${activeIndex * 100}%)` }}
                >
                    {items.map((item) => renderItem(item, SLIDER_WIDTH))}
                </div>
            </div>

            <div className="features__slide">
                <img
                    className="features__slideArrow"
                    src={slideLeft}
                    alt="go left"
                    onClick={decrementSlide}
                />
                <img
                    className="features__slideArrow"
                    src={slideRight}
                    alt="go right"
                    onClick={incrementSlide}
                />
            </div>
            <div className="features__slide--text">
                <span className="features__slide--text-first">
                    0{activeIndex + 1}
                </span>
                <span className="features__slide--text-second">/ 03</span>
            </div>
        </>
    );
};
export default Carousel;
