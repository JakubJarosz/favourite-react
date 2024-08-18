
import './App.css';
import PopularMovies from './components/PopularMovies';
import NextPage from './components/NextPage'
import React, {useState} from 'react';

function App() {
  const [pageNumber, setPageNumber] = useState(1)

  const btnNext = () => {
    setPageNumber(pageNumber+1)
  }

  return (
    <div className="App">
     <PopularMovies/>
    <div>
      <button>Prev</button>
      <button onClick={() => btnNext()}>Next</button>
      <p>Page: {pageNumber}</p>
    </div>
    </div>
  );
}

export default App;
