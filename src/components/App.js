import MovieButtonList from './MovieButtonList.js';
import Search from './Search.js';
import UserMovieInput from './UserMovieInput.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      allMovies: [],
      displayedMovies: [],
      searchValue: '',
      addMovieValue: ''
    }
  }

  searchMovieInputChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  getMatchingMovies() {
    let matchingMovies = this.state.allMovies.filter(movie => 
      movie.title.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) >= 0
    );

    return matchingMovies.length > 0 ? matchingMovies : [{title: 'No movies found with this name yo!'}];
  }

  searchClickHandler() {
    this.setState({
      displayedMovies: this.getMatchingMovies(),
      searchValue: ''
    });
  }
  
  addMovieInputChange(event) {
    this.setState({
      addMovieValue: event.target.value
    })
  }

  addMovieHandler() {
    this.setState({
      allMovies: [...this.state.allMovies, {title: this.state.addMovieValue}],
      displayedMovies: [...this.state.allMovies, {title: this.state.addMovieValue}]
    });
  }

  componentDidMount() {
    this.setState({
      displayedMovies: this.state.allMovies
    })
  }

  render() {
    return (
      <div>
        <section>
          <UserMovieInput value={this.state.addMovieValue} addMovieHandler={this.addMovieHandler.bind(this)} addMovieInputChange={this.addMovieInputChange.bind(this)} />
          <Search value={this.state.searchValue} searchClickHandler={this.searchClickHandler.bind(this)} searchMovieInputChange={this.searchMovieInputChange.bind(this)} />
        </section>
        <section>
          <MovieButtonList displayedMovies={this.state.displayedMovies} />
        </section>
      </div>
    );
  }

}

export default App;