import React, {useState, useEffect} from "react";
import SearchMovies from "../components/SearchMovies";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import FilteredMoviesList from "../components/FilteredMoviesList";
import api from "../API/api"

const SearchMoviePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputList, setInputList] = useState([])
    const filter= searchParams.get("filter")
    const page = parseInt(searchParams.get('page') || '1', 10);

    const handleSubmit = (e) => {
        e.preventDefault();
     }
     const handleInput = (e) => {
      setSearchParams({filter: e.target.value})
     }
     
     useEffect(() => {
        setSearchParams({filter: ''})
       }, [])

     useEffect(() => {
        fetchSearchMovies();
       }, [searchParams])
    
      const fetchSearchMovies = async () => {
       try {
         const searchMovie = await api.fetchInputMovies(page,filter)
         setInputList(searchMovie.data.results)
       } catch (error) {
         console.log(error)
       }
     }

    return (
        <>
        <div>
        <SearchMovies
        handleSubmit={handleSubmit}
        handleInput={handleInput}
        />
        </div>
        <div>
            <FilteredMoviesList
            inputList={inputList}/>
        </div>
        <div>
           {inputList.length >= 20 ? <Pagination/> : <></>}
        </div>
        </>
    )
}


export default SearchMoviePage