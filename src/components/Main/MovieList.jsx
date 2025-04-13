import PropTypes from "prop-types";
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

MovieList.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
    })
  ).isRequired, // Validate that movie is an array of objects with specific properties
  onSelectMovie: PropTypes.func.isRequired, // Validate that onSelectMovie is a required function
};

export default MovieList;
