import React, {useEffect, useState} from "react";
import FilterType from "../components/FilterType";
import Pagination from "../components/Pagination";
import { useSearchParams} from 'react-router-dom';
import api from "../API/api";
import PopularMoviesList from "../components/PopularMoviesList";
import TopRatedMoviesList from "../components/TopRatedMoviesList"

 const DiscoverMoviePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page') || '1', 10);
    const [popMoviesList, setPopMoviesList] = useState([]);
    const [topRatedMovieList, setTopRatedMovieList] = useState([]);
    const filter = searchParams.get("filter")



    useEffect(() => {
        fetchApiPopMovies();
        fetchTRMovies();
        if (filter === null) {
          setSearchParams({filter: "popular-movies", page: page})
        }
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
      
    return (
        <div>
            <FilterType/>
        
        <div>

        {filter === "popular-movies" ? 
    (<PopularMoviesList
      popMoviesList={popMoviesList}
      />) :filter === "top-rated-movies" ?(<TopRatedMoviesList
        topRatedMovieList={topRatedMovieList}
        />) : (<h1>Choose filter</h1>)
    }
        </div>
        <div>
     <Pagination/>
        </div>
        </div>
    )
}

export default DiscoverMoviePage