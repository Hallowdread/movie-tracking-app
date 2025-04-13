import PropTypes from "prop-types";

const Search = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      className="search"
      placeholder="Search Movies"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

Search.propTypes = {
  query: PropTypes.string.isRequired, // Validate that query is a required string
  setQuery: PropTypes.func.isRequired, // Validate that setQuery is a required function
};

export default Search;
