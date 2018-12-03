const UserMovieInput = ({value, addMovieHandler, addMovieInputChange}) => (
  <div className="add-movie-div">
    <input value={value} onChange={addMovieInputChange} placeholder="Add movie title here"></input>
    <button onClick={addMovieHandler} id="add-movie">Add</button>
  </div>
);

export default UserMovieInput;