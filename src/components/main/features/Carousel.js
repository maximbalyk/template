import React, { useState } from "react";
import slideLeft from "../../../images/slide-left.svg";
import slideRight from "../../../images/slide-right.svg";
import { useSwipeable } from "react-swipeable";

const Carousel = ({ items, renderItem }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [countPages, setCountPages] = useState(1);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }

        setActiveIndex(newIndex);
        setCountPages(newIndex + 1);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    });

    return (
        <>
            <div {...handlers} className="features__carousel">
                <div
                    {...handlers}
                    className="features__inner"
                    style={{ transform: `translate(-${activeIndex * 100}%)` }}
                >
                    {items.map((item) => {
                        const width = "100px";
                        return renderItem(item, width);
                    })}
                </div>
            </div>

            <div className="features__slide">
                <img
                    className="features__slideArrow"
                    src={slideLeft}
                    alt="go left"
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                />
                <img
                    className="features__slideArrow"
                    src={slideRight}
                    alt="go right"
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                />
            </div>
            <div className="features__slide--text">
                <span className="features__slide--text-first">
                    0{countPages}
                </span>
                <span className="features__slide--text-second">/ 03</span>
            </div>
        </>
    );
};
export default Carousel;
