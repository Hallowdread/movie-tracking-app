import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
const key = "81d34371";
import StarRating from "./StarRating.jsx";

const MovieDetails = ({ selectedId }) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //
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
  }, [key, selectedId]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back">
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
            <div className="rating"></div>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
