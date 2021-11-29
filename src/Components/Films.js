import React, { useState, useEffect } from 'react'
import Movies from '../JsonData/Movies.json'
import { Carousel } from '@trendyol-js/react-carousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Films() {
    const [mouseOver,setMouseOver] = useState(false);
    const [sizingMouseOver,setSizingMouseOver] = useState(false);
    const axios = require('axios')

    const getFilms = async () => {
        try {
            const resp = await axios.get('http://www.omdbapi.com/?t=spider+man+far+from+home&apikey=2bfe775f');
            console.log(resp.data);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
    getFilms();
    return (
        <div>
           <div>
               <p style = {{color:"white",fontFamily:"sans-serif",fontSize:"20px",marginLeft:"4%"}}>Netflix'te Popüler</p>
           </div>
            <Carousel show={6}  slide={2} transition={0.5}
                leftArrow={<div style = {{position:"relative"}}><ArrowBackIosIcon style = {sizingMouseOver && mouseOver ? {display:"block"}:{display:"none"}} className = "arrow-left" /></div>}
                rightArrow={<div style = {{position:"relative"}}><ArrowForwardIosIcon onClick = {() => setSizingMouseOver(true)}   onMouseOver = {() => setMouseOver(true)} style = {mouseOver ? {display:"block"}:{display:"none"}}  className = "arrow-right"/></div>}>
                {Movies.map(movie => {
                    return (
                        <div onMouseOut = {()=> setMouseOver(false)} onMouseOver = {() => setMouseOver(true)} style = {{backgroundImage:`url("${movie.Poster}")`}} className = "movie-slides">
                         
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}
