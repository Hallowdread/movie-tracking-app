import Movie from "./Movie";

const MovieList = ({ movie }) => {
  return (
    <ul className="list list-movies">
      {movie.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
