const Watched = ({ watched }) => {
  return (
    <li>
      <img src={watched.Poster} alt={`${watched.Title} Poster`} />
      <h3>{watched.Title}</h3>
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
        <button className="btn-delete">X</button>
      </div>
    </li>
  );
};

export default Watched;
