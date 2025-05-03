import PropTypes from "prop-types";
import { useRef } from "react";
import { useKey } from "../../Hooks/useKey";

const Search = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery();
  });

  //* If you uncomment this ...add useEffect beside the useRef and comment the useKey hook
  // useEffect(() => {
  //   const callback = (e) => {
  //     if (document.activeElement === inputEl.current) return;

  //     if (e.code === "Enter") {
  //       inputEl.current.focus();
  //       setQuery("");
  //     }
  //   };

  //   document.addEventListener("keydown", callback);

  //   return () => document.removeEventListener("keydown", callback);
  // }, [setQuery]);

  // useEffect(() => {
  //   const el = document.querySelector(".search");
  //   el.focus();
  // }, []);
  return (
    <input
      type="text"
      className="search"
      placeholder="Search Movies"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

Search.propTypes = {
  query: PropTypes.string.isRequired, // Validate that query is a required string
  setQuery: PropTypes.func.isRequired, // Validate that setQuery is a required function
};

export default Search;
