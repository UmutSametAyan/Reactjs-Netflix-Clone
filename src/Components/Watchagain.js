import React from 'react'
import '../App.css';
import Home from './Home'
export default function Watchagain() {


    const watchAgainMovieFilter = [
        {movieType:"kenk",title:"Netlix'te Popüler"},
        {movieType:"2005",title:"2005 filmleri"},
    ];
    return (
       <div>
            <Home movieData = {watchAgainMovieFilter} jumbotronData = "watchagain" />
        </div>
    )
}
