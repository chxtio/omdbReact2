import React, {useState } from 'react';
import './MovieInfo.css';
import Movies from './Movies';

function MovieInfo() { 
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const [showMovies, setShowMovies] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        async function fetchMyAPI() {
            const searchParam = encodeURIComponent(query);
            const apiUrl = `https://www.omdbapi.com/${process.env.REACT_APP_API_KEY}&s=${searchParam}&r=json`;
            console.log(apiUrl);
            let response = await fetch(apiUrl);
            response = await response.json();
            console.log(response.Search);
            setMovies(response.Search);
        }
        fetchMyAPI();
        setShowMovies(true);
        setQuery("");
    }

    return(
        <div className="movieinfo">
            This is where movies will go
            <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">Search Movie Name:</label>
                <input
                    id="queryInput"
                    value={query}
                    type="text"
                    onChange={e => setQuery(e.target.value)}
                    />
                <button className="search">Submit</button>
            </form>
                
        </div>
    );
}

export default MovieInfo;