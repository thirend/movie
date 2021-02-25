import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import {Link} from 'react-router-dom';

function Movie({ title, year, summary, poster, rating, genres }) {
  return (
    <div className="movie">
      <Link to={{pathname:'/movie-detail', state:{year, title, summary, poster, rating,genres},}}>
      <div className="movie__data">
        <img
          className="movie__poster"
          src={poster}
          alt={title}
          title={title}
        ></img>
        <h3 className="movie__year"> {year}</h3>
        <h3 className="movie__genres">
          {genres.map((res, idx) => {
            return (
              <li key={idx} className="movie__genres">
                {res}
              </li>
            );
          })}
        </h3>
        <h2 className="movie__title" style={{ backgroundColor: "red" }}>
          {title}
        </h2>
        <h3 className="movie__rating">Rating : {rating}</h3>
        <h4 className="summary">
          { 
          summary.length>500? summary.slice(0,180) + '...':summary
          
          }
        </h4>
        <a href="http://www.naver.com">naver</a>
        <hr />
      </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
