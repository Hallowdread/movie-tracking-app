import PropTypes from "prop-types";
import Watched from "./Watched.jsx";

const WatchedMovieList = ({ watched, onDeleteMovie, onSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {watched.map((watched) => (
        <Watched
          key={watched.imdbID}
          watched={watched}
          onDeleteMovie={onDeleteMovie}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
};

WatchedMovieList.propTypes = {
  watched: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imdbRating: PropTypes.number.isRequired,
      userRating: PropTypes.number.isRequired,
      runtime: PropTypes.number.isRequired,
    })
  ).isRequired, // Validate that watched is an array of objects with specific properties
  onDeleteMovie: PropTypes.func.isRequired, // Validate that onDeleteMovie is a required function
  onSelectMovie: PropTypes.func.isRequired,
};

export default WatchedMovieList;
