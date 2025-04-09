const Loader = () => {
  return (
    <div
      className="loader-container"
      role="status"
      aria-label="Loading content"
    >
      <div className="loader">
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
      </div>
      <div className="loader-text">Loading...</div>
    </div>
  );
};

export default Loader;
