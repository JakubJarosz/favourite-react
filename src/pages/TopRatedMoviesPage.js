import React, {useState, useEffect} from "react";
import api from "../API/api";
import FilterType from '../components/FilterType'
import Pagination from "../components/Pagination";



  const TopRatedMoviesPage = () => {
    const [topRatedMovieList, setTopRatedMovieList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

    const btnNext = () => {
      setPageNumber(pageNumber+1)
    }
  
    const prevBtn = () => {
      if (pageNumber <= 1) {
        setPageNumber(1)
      } else {
        setPageNumber(pageNumber-1)
      }
    }
   
    useEffect(() => {
        fetchTRMovies();
    }, [pageNumber])

    const fetchTRMovies = async () => {
      try {
        const topRMovies = await api.fetchTopRatedMovies(pageNumber)
        setTopRatedMovieList(topRMovies.data.results)
      } catch (error) {
        console.log(error)
      }
    }
   
    return (
        <div>
            <FilterType/>
        <div>
        <ul>
           {topRatedMovieList.map((el) => <li key={el.id}><img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`} alt="ss" width="50" height="60"/></li>)}
        </ul>
    </div>
    {/* <Pagination
    prevBtn={prevBtn}
    btnNext={btnNext}
    pageNumber={pageNumber}
    /> */}
    </div>
    )
   
  }

  export default TopRatedMoviesPage
