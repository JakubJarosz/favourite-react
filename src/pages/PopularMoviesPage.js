import React from "react";



  const PopularMoviesPage = ({popMoviesList}) => {
    
    return (
      <div>
        <div>
        <ul>
           {popMoviesList.map((el) => <li key={el.id}><img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt="ss" width="50" height="60"/></li>)}
        </ul>
    </div>
    </div>
    )
   
  }

  export default PopularMoviesPage

  


  