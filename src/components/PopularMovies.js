import React, {useState, useEffect} from "react";




  const PopularMovies = () => {
  const [popMovies, setPopMovies] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRlZjNkOTljYWM2MjEwMjZkZDEyZjE2YWJlZTQ0YiIsIm5iZiI6MTcyMzk5OTIzNS43NjE4NTksInN1YiI6IjYzMmM1NWY0YmE0ODAyMDA3Yzc1OWZlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LVF0QDy8zZQJf6zmr6LJk0ROj9wh3XHQvUwZd2Mufic'
  }
};


useEffect(() => {
    fetch(url, options)
  .then(res => res.json())
  .then(json => setPopMovies(json.results))
  .catch(err => console.error('error:' + err));
  }, [])

   console.log(popMovies)
    return (
        <div>
        <ul>
            {popMovies.map((el) => (<li><img src={`https://image.tmdb.org/t/p/w500${el.poster_path}`} alt="Girl in a jacket" width="50" height="50"/></li>))}
        </ul>
    </div>
    )
   
  }

  export default PopularMovies

