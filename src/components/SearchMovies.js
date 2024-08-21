import React from "react";



const SearchMovies = ({handleSubmit, handleInput}) => {
 


    return (
        <div>
            
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Search movies..."
            onChange={handleInput}
          
            />
            
        </form>
        </div>
    )
}

export default SearchMovies