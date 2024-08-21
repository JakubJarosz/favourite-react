import React from "react";
import { useNavigate } from "react-router-dom";

const FilteredMoviesList = ({inputList}) => {
    const navigate = useNavigate();
    const handleImageClick = (id) => {
        navigate(`/movie/${id}`)
      };
    return (
        <div>
            <ul>
                {inputList.map((el) => <li key={el.id}><img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt="ss" width="50" height="60" onClick={() => handleImageClick(el.id)}/></li>)}
            </ul>
        </div>
    )
}


export default FilteredMoviesList