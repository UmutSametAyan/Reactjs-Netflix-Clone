import React from 'react'
import Jumbotron from './Jumbotron'
import Slider from './Slider'
import Movies from '../JsonData/Movies.json'
export default function Home() {
    const nameStyles = {
        color: "white", fontFamily: "sans-serif", fontSize: "20px", marginLeft: "4%",marginTop:"1rem" 
    }
    const movieSlideFilter = [
        {movieType:"popularfilms",title:"Netflix'te Popüler"},
        {movieType:"2005",title:"2005 filmleri"},
    ];
    return (
        <div>

            <Jumbotron/>
            {/* <div>
                <p style={nameStyles}>Netflix'te Popüler</p>
                <Slider dataProps = {Movies.filter(i => i.Popular === "popularfilms")}/>
            </div>
            <div>
            <p style={nameStyles}>Netflix'te Popüler</p>
            <Slider dataProps = {Movies.filter(i => i.Year === "2005")}/>
            </div> */}
            <div> 
                {movieSlideFilter.map(movieFilter =>{
                    return(
                        <div>
                        <p style={nameStyles}> {movieFilter.title} </p>
                        <Slider dataProps = {Movies.filter(movie => movie.DataType === movieFilter.movieType)} />
                        </div>
                    )
                })}
            </div>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
         <p>asdasdasd</p>
        </div>
    )
}
