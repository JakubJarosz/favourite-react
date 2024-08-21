import React from "react";
import { useNavigate } from "react-router-dom";



  const TopRatedMoviesList = ({topRatedMovieList}) => {
    const navigate = useNavigate();
  

    const handleImageClick = (id) => {
      navigate(`/movie/${id}`)
     
    };
    return (
        <div>
          <h1>Top Rated Movies</h1>
        <div>
        <ul>
           {topRatedMovieList.map((el) => <li key={el.id}><img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt="ss" width="50" height="60" onClick={() => handleImageClick(el.id)}/></li>)}
        </ul>
    </div>

    </div>
    )
   
  }

  export default TopRatedMoviesList
