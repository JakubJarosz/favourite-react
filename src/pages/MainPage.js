import React, {useEffect, useState} from "react";
import FilterType from "../components/FilterType";
import Pagination from "../components/Pagination";
import { useSearchParams} from 'react-router-dom';
import api from "../API/api";
import PopularMoviesPage from "./PopularMoviesPage";
import TopRatedMoviesPage from "./TopRatedMoviesPage"

 const MainPage = () => {
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);
    const [popMoviesList, setPopMoviesList] = useState([]);
    const [topRatedMovieList, setTopRatedMovieList] = useState([]);
    const filter = searchParams.get("filter")



    useEffect(() => {
        fetchApiPopMovies();
        fetchTRMovies();
        console.log(filter)
       }, [page])
   
       const fetchApiPopMovies = async () => {
         try {
           const favMovies = await api.fetchPopularMovies(page)
           setPopMoviesList(favMovies.data.results)
         } catch (error) {
           console.log(error)
         }
       }
       const fetchTRMovies = async () => {
        try {
          const topRMovies = await api.fetchTopRatedMovies(page)
          setTopRatedMovieList(topRMovies.data.results)
        } catch (error) {
          console.log(error)
        }
      }
      // top-rated-movies
   
    return (
        <div>
            <FilterType/>
        <div>
         <h1>Discover your favourite movies</h1>
        </div>
        <div>

        {filter === "popular-movies" ? 
    (<PopularMoviesPage
      popMoviesList={popMoviesList}
      />) :filter === "top-rated-movies" ?(<TopRatedMoviesPage
        topRatedMovieList={topRatedMovieList}
        />) : (<h1></h1>)
    }
    
        </div>
        <div>
     <Pagination/>
        </div>
        </div>
    )
}

export default MainPage