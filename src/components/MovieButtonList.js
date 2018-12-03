import MovieButton from './MovieButton.js';

const MovieButtonList = ({displayedMovies}) => (
  <div id="movieButtonList">
    {displayedMovies.map((movie) => 
    <MovieButton movie={movie} />)}
  </div>
);

export default MovieButtonList;