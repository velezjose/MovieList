const MovieButton = ({movie, onMovieButtonClick}) => (
  <button className="movie" onClick={onMovieButtonClick} value={movie.title}>{movie.title}</button>
);

export default MovieButton;