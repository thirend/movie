import React from "react";
import axios from "axios";
import Movieclass from "../components/movieClass";
import Movie from "../components/movie";
import './Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log("Start");
  }

  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    this.getMovies();
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);
    //this.setState({movies:movies});
    this.setState({ movies, isLoading: false });
  };

  display = (item) => {
    console.log(item.yeat);
  };

  render() {
    const { isLoading, movies } = this.state;

    return (
      <div>
        <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map((movie) => {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    rating={movie.rating}
                    genres = {movie.genres}
                  />
                );
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}

export default Home;
