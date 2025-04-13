import PropTypes from "prop-types";

const NumResults = ({ movie }) => {
  return <p className="num-results">Found {movie.length} result(s)</p>;
};

NumResults.propTypes = {
  movie: PropTypes.array.isRequired, // Validate that movie is a required array
};

export default NumResults;
