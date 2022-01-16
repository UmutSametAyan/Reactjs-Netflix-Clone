import React from 'react'
import Jumbotron from './Jumbotron'
import Slider from './Slider'
import Movies from '../JsonData/Movies.json'
export default function Home(props) {
    const nameStyles = {
        color: "white", fontFamily: "sans-serif", fontSize: "20px", marginLeft: "4%",marginTop:"1rem" 
    }

    return (
        <div className='Home'>
            <Jumbotron data = {Movies.find(movie => movie.isPopular === props.jumbotronData)} />
            <div> 
                {props.movieData.map(movieFilter =>{
                    return(
                        <div>
                        <p style={nameStyles}> {movieFilter.title} </p>
                        <Slider dataProps = {Movies.filter(movie => movie.DataType === movieFilter.movieType)} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
