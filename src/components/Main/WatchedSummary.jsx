import PropTypes from "prop-types";

const WatchedSummary = ({ watched }) => {
  const average = (arr) => arr.reduce((acc, cur) => acc + cur / arr.length, 0);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h2>Movies You Watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movie(s)</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} minutes</span>
        </p>
      </div>
    </div>
  );
};

WatchedSummary.propTypes = {
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
};

export default WatchedSummary;
