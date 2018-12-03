const Search = ({searchClickHandler, searchMovieInputChange, searchValue}) => (
  <div className="search-div">
    <input value={searchValue} placeholder="Search..." onChange={searchMovieInputChange}></input>
    <button onClick={searchClickHandler}>Go!</button>
  </div>
);

export default Search;