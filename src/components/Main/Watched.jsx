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

export default Watched;
