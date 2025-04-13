import PropTypes from "prop-types";

const Watched = ({ watched, onDeleteMovie }) => {
  return (
    <li>
      <img src={watched.poster} alt={`${watched.title} Poster`} />
      <h3>{watched.title}</h3>
      <div>
        <p>
          <span>⭐</span>
          <span>{watched.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{watched.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{watched.runtime} minutes</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteMovie(watched.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
};

Watched.propTypes = {
  watched: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imdbRating: PropTypes.number.isRequired,
    userRating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
  }).isRequired, // Validate that watched is an object with specific properties
  onDeleteMovie: PropTypes.func.isRequired, // Validate that onDeleteMovie is a required function
};

export default Watched;
