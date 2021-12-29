import React, { useState, useRef } from 'react'
import { Carousel } from '@trendyol-js/react-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Films(props) {
    const [mouseOver, setMouseOver] = useState(false);
    const [sizingMouseOver, setSizingMouseOver] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const leftArrowRef = useRef();

    const arrowRightClick = () => {
        setSizingMouseOver(true);
        setIsOpen(true);
        leftArrowRef.current.style.left = "60px";
    }
    return (
        <div>

            <Carousel className={isOpen ? "full-width" : "half-width"} show={6} slide={2} transition={0.5}
                leftArrow={<div ref={leftArrowRef} style={{ position: "relative" }}><ArrowBackIosIcon style={sizingMouseOver && mouseOver ? { display: "block" } : { display: "none" }} className="arrow-left" /></div>}
                rightArrow={<div style={{ position: "relative" }}><ArrowForwardIosIcon onClick={arrowRightClick} onMouseOver={() => setMouseOver(true)} style={mouseOver ? { display: "block" } : { display: "none" }} className="arrow-right" /></div>}>
                {props.dataProps.map(movie => {
                    return (
                        <div onMouseOut={() => setMouseOver(false)} onMouseOver={() => setMouseOver(true)} style={{ backgroundImage: `url("${movie.Poster}")` }} className="movie-slides"></div>
                    )
                })}
            </Carousel>
        </div>
    )
}
