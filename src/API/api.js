import axios from "axios";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTRlZjNkOTljYWM2MjEwMjZkZDEyZjE2YWJlZTQ0YiIsIm5iZiI6MTcyMzk5OTIzNS43NjE4NTksInN1YiI6IjYzMmM1NWY0YmE0ODAyMDA3Yzc1OWZlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LVF0QDy8zZQJf6zmr6LJk0ROj9wh3XHQvUwZd2Mufic'
  }
};

export const fetchPopularMovies = (page) => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,options)
}


export const fetchTopRatedMovies = (page) => {
  return axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,options)
}

export const fetchInputMovies = (page, query) => {
  return axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,options)
}

export const fetchById = (id) => {
  return axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,options)
}


export default {
    fetchPopularMovies,
    fetchTopRatedMovies,
    fetchInputMovies,
    fetchById
}