import Watched from "./Watched.jsx";

const WatchedMovieList = ({ watched, onDeleteMovie }) => {
  return (
    <ul className="list">
      {watched.map((watched) => (
        <Watched
          key={watched.imdbID}
          watched={watched}
          onDeleteMovie={onDeleteMovie}
        />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
