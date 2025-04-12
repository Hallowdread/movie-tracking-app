import Movie from "./Movie";

const MovieList = ({ movie, onSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movie.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

export default MovieList;
