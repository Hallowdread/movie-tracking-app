import Watched from "./Watched";

const WatchedMovieList = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((watched) => (
        <Watched key={watched.imdbID} watched={watched} />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
