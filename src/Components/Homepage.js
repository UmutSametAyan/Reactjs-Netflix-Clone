import React from 'react'
import Home from './Home'
export default function Homepage() {
    const watchAgainMovieFilter = [
        {movieType:"popularfilms",title:"Netlix'te Popüler"},
        {movieType:"2005",title:"2005 filmleri"},
    ];
    return (
        <div>
            <Home movieData = {watchAgainMovieFilter} jumbotronData = "popular" />
        </div>
    )
}
