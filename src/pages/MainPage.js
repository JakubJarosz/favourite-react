import React, {useEffect, useState} from "react";
import FilterType from "../components/FilterType";
import Pagination from "../components/Pagination";
import { useSearchParams, useNavigate } from 'react-router-dom';
import api from "../API/api";
import PopularMoviesPage from "./PopularMoviesPage";

 const MainPage = () => {
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);
    const [popMoviesList, setPopMoviesList] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetchApiPopMovies();
       }, [page])
   
       const fetchApiPopMovies = async () => {
         try {
           const favMovies = await api.fetchPopularMovies(page)
           setPopMoviesList(favMovies.data.results)
         } catch (error) {
           console.log(error)
         }
       }
   console.log(searchParams.get('page'))
    return (
        <div>
            <FilterType/>
        <div>
         <h1>Discover your favourite movies</h1>
        </div>
        <div>
         <PopularMoviesPage
         popMoviesList={popMoviesList}
         />
        </div>
        <div>
     <Pagination/>
        </div>
        </div>
    )
}

export default MainPage