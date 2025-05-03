import { useState } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Logo from "./components/NavBar/Logo.jsx";
import Search from "./components/NavBar/Search.jsx";
import NumResults from "./components/NavBar/NumResults.jsx";
import Main from "./components/Main/Main";
import Box from "./components/Main/Box";
import MovieList from "./components/Main/MovieList";
import MovieDetails from "./components/Main/MovieDetails.jsx";
import WatchedSummary from "./components/Main/WatchedSummary";
import WatchedMovieList from "./components/Main/WatchedMovieList";
import ErrorMessage from "./components/Main/ErrorMessage";
import Loader from "./components/Loader/Loader.jsx";
import { useMovie } from "./Hooks/useMovie.jsx";
import { useLocalStorageState } from "./Hooks/useLocalStorageState.jsx";

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const tempWatchedData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     runtime: 148,
//     imdbRating: 8.8,
//     userRating: 10,
//   },
//   {
//     imdbID: "tt0088763",
//     Title: "Back to the Future",
//     Year: "1985",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
//     runtime: 116,
//     imdbRating: 8.5,
//     userRating: 9,
//   },
// ];

export default function App() {
  const [query, setQuery] = useState("");
  const { movie, error, isLoading } = useMovie(query);
  const [watched, setWatched] = useLocalStorageState([], "watched");

  const [selectedId, setSelectedId] = useState(null);
  // ?

  //? Function for selecting the movie with the id
  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };
  //? Function for adding the watched movie to the watched section
  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched, movie]);
  };
  //? Function for closing the movie detail section
  const handleCloseMovie = () => {
    setSelectedId(null);
  };
  //? Function for deleting the watched movie
  const handleDeleteWatchedMovie = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };
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
          {!isLoading && !error && (
            <MovieList movie={movie} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
          {isLoading && <Loader />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onAddWatched={handleAddWatched}
              onCloseMovie={handleCloseMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              {selectedId ? (
                <MovieDetails
                  selectedId={selectedId}
                  onAddWatched={handleAddWatched}
                  onCloseMovie={handleCloseMovie}
                  watched={watched}
                />
              ) : (
                <WatchedMovieList
                  watched={watched}
                  onDeleteMovie={handleDeleteWatchedMovie}
                  onSelectMovie={handleSelectMovie}
                />
              )}
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
