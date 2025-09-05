import './App.css'
import { useState, useEffect } from 'react'
import SearchBar from './components/MovieSearch'
import MovieCard from './components/MovieCard'

function App() {
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=movie&type=movie&apikey=${import.meta.env.VITE_OMDB_API_KEY}`);
      const result = await response.json();
      console.log(result);
      if (result.Search) {
        setMovies(result.Search);
      }
    } catch (error) {
      console.error("Error fetching movies");
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Movies App</h1>
      <SearchBar />
      <div className="movie-card-container d-flex flex-wrap justify-content-center">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  )
}

export default App
