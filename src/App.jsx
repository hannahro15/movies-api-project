import './App.css'
import SearchBar from './components/MovieSearch'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <h1>Movies App</h1>
      <SearchBar />
      <div className="movie-card-container">
        <MovieCard />
      </div>
    </>
  )
}

export default App
