import { useEffect, useState } from "react";
import Loader from "../Loader/Loader.jsx";
const key = "81d34371";
import StarRating from "./StarRating.jsx";

const MovieDetails = ({ selectedId, onAddWatched, onCloseMovie }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  //? Destructuring and assigning new varaibles in the movie object
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Director: director,
    Genre: genre,
    Actors: actors,
  } = movie;

  //? Function to add the movie to the watched list
  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      userRating,
      runtime: Number(runtime.split(" ").at(0)),
      imdbRating: Number(imdbRating),
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  };
  //? UseEffect for the escape key
  useEffect(() => {
    const callback = (e) => {
      if (e.code === "Escape") {
        onCloseMovie();
      }
    };
    document.addEventListener("keydown", callback);
    //* Clean Up Function
    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [onCloseMovie]);

  //? UseEffect for fetching the movies
  useEffect(() => {
    const getMoviesDetails = async () => {
      setIsLoading(true);
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${key}&i=${selectedId}`
      );
      const data = await response.json();
      setMovie(data);
      setIsLoading(false);
    };
    getMoviesDetails();
  }, [selectedId]);

  //? UseEffect to add the movie title to the Page title
  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    //* Clean up function
    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
            <img src={poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          {/*  */}
          <section>
            <div className="rating">
              <StarRating
                maxRating={10}
                size={24}
                onSetRating={setUserRating}
              />
              {userRating > 0 && (
                <button className="btn-add" onClick={handleAdd}>
                  + Add to List
                </button>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring: {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
