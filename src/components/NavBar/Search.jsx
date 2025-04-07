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

export default Search;
