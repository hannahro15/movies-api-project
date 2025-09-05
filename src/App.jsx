import './App.css'
import { useState, useEffect } from 'react'
import SearchBar from './components/MovieSearch'
import MovieCard from './components/MovieCard'

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(false);

  async function searchMovies(search) {
    if (!search) return;

    setSearch(true);
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${search}&type=movie&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
      const result = await response.json();
      setMovies(result.Search || []);
    } catch (error) {
      console.error("Error fetching movies");
      setMovies([]);
    }
  }

  return (
    <>
      <h1>Movies App</h1>
      <SearchBar onSearch={searchMovies} />
      <div className="movie-card-container d-flex flex-wrap justify-content-center">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p>{search ? "No movies found. Try a different search!" : "Search for movies to get started!"}</p>
        )}
      </div>
    </>
  )
}

export default App
