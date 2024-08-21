
import './App.css';
import React from 'react';
import SearchMoviePage from './pages/SearchMoviePage';
import DiscoverMoviePage from './pages/DiscoverMoviePage';
import MainPage from "./pages/MainPage"
import MovieInfoPage from './pages/MovieInfoPage';
import { Link, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
         <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/discover">Discover movies</Link>
            </li>
            <li>
              <Link to="/search">Search movies</Link>
            </li>
          </ul>
         </nav>
     <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/discover' element={<DiscoverMoviePage/>}/>
      <Route path='/search' element={<SearchMoviePage/>}/>
      <Route path='/movie/:id' element={<MovieInfoPage/>}/>
     </Routes>
     </>
  );
}

export default App;
