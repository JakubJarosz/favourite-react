
import './App.css';
import PopularMoviesPage from './pages/PopularMoviesPage';
import Pagination from './components/Pagination'
import React, {useState} from 'react';
import TopRatedMoviesPage from './pages/TopRatedMoviesPage';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<MainPage/>}/>
      {/* <Route path='/popular-movies' element={<PopularMoviesPage/>}/> */}
      {/* <Route path='/top-rated-movies/' element={<TopRatedMoviesPage/>}/> */}
     </Routes>
     <button></button>
     </>
  );
}

export default App;
