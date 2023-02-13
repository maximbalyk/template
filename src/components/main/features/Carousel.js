import React, {useEffect, useState, Children , cloneElement} from "react";
import slideLeft from "../../../images/slide-left.svg";
import slideRight from "../../../images/slide-right.svg";

const PAGE_WIDTH = 400
export const Carousel = ({children}) => {
    const[pages, setPages] = useState([])
    const[offset, setOffset] = useState(0)
    const[countPages, setCountPages] = useState(1)

    const handleLeftArrowClick = () => {
        setOffset((currentOffset)=> {
            const newOffset = currentOffset + PAGE_WIDTH
            return currentOffset < 0 ? newOffset : currentOffset
        })
        setCountPages((countPages)=> {
            return countPages > 1 ? --countPages : countPages
        })
    }
    const handleRightArrowClick = () => {
        setOffset((currentOffset)=> {
            const newOffset = currentOffset - PAGE_WIDTH
            return currentOffset > -(PAGE_WIDTH * (pages.length -1)) ? newOffset : currentOffset
        })
        setCountPages((countPages)=> {
            return countPages < 3 ? ++countPages : countPages
        })
    }

    useEffect(()=> {
            setPages(
                Children.map(children, child => {
                    return cloneElement(child, {
                        style: {
                            maxWidth:`${PAGE_WIDTH}px`,
                            minWidth:`${PAGE_WIDTH}px`,
                            height:"100%",
                        }
                    })
                })
            )
        }, [children])

    return(
        <div className="main-container">
            <div className="window">
                <div
                    className="all-pages-container"
                    style={{
                        transform: `translateX(${offset}px)`
                    }}
                >
                    {pages}
                </div>
            </div>
            <div className="features__slide">
                <img
                    className="features__slideArrow"
                    src={slideLeft}
                    alt="go left"
                    onClick={handleLeftArrowClick}
                />
                <img
                    className="features__slideArrow"
                    src={slideRight}
                    alt="go right"
                    onClick={handleRightArrowClick}
                />
            </div>
            <div className="features__slide--text">
                <span className="features__slide--text-first">0{countPages}</span>
                <span className="features__slide--text-second">/ 03</span>
            </div>
        </div>
    )
}