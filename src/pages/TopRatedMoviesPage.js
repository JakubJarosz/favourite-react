import React from "react";



  const TopRatedMoviesPage = ({topRatedMovieList}) => {

    return (
        <div>
        <div>
        <ul>
           {topRatedMovieList.map((el) => <li key={el.id}><img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt="ss" width="50" height="60"/></li>)}
        </ul>
    </div>

    </div>
    )
   
  }

  export default TopRatedMoviesPage
