import { useState, useEffect } from "react";

const key = "81d34371";

export function useMovie(query) {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //? UseEffect for getting the movies from the api
  useEffect(() => {
    const controlller = new AbortController();

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${key}&s=${query}`,
          { signal: controlller.signal }
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
        if (err.name !== "AbortError") {
          setError(err.message);
          console.log(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    if (!query.length) {
      setMovie([]);
      setError("");
      return;
    }
    // handleCloseMovie();
    fetchMovies();

    //? Clean up function
    return () => {
      controlller.abort();
    };
  }, [query]);

  return { movie, error, isLoading };
}
