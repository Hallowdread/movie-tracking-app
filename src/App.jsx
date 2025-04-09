import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Logo from "./components/NavBar/Logo";
import Search from "./components/NavBar/Search";
import NumResults from "./components/NumResults/NumResults";
import Main from "./components/Main/Main";
import Box from "./components/Main/Box";
import MovieList from "./components/Main/MovieList";
import WatchedSummary from "./components/Main/WatchedSummary";
import WatchedMovieList from "./components/Main/WatchedMovieList";
import ErrorMessage from "./components/Main/ErrorMessage";
import Loader from "./components/Loader/Loader.jsx";
import "../src/components/Loader/Loader.css";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];
const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
const key = "81d34371";

export default function App() {
  const [movie, setMovie] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //
  //? UseEffect for getting the movies from the api
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&s=${query}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong when fetching the movie");
        }
        //
        const data = await response.json();
        if (data.Response === "False") {
          throw new Error("Movie not found");
        }
        setMovie(data.Search);
        setError("");
      } catch (err) {
        console.error(err);
        setError(err.message);
        // setMovie([]);
      } finally {
        setIsLoading(false);
      }
    };
    if (!query.length) {
      setMovie([]);
      setError("");
      return;
    }
    fetchMovies();
  }, [query]);
  //
  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults movie={movie} />
      </NavBar>

      <Main>
        <Box>
          <MovieList movie={movie} />
          {error && <ErrorMessage message={error} />}
          {isLoading && <Loader />}
        </Box>

        <Box>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </Box>
      </Main>
    </>
  );
}

// ?
