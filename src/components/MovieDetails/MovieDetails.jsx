import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../services/Api/api';

const MovieDetails = () => {
  const [movieDatail, setMovieDatails] = useState();
  const { movieId } = useParams();
  const { original_title, overview, genres, poster_path, vote_average } =
    movieDatail;

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovieDatails(data));
  }, [movieId]);

  //   const { original_title, overview, genres, poster_path, vote_average } =
  //     movieDatail;
  //   const score = vote_average * 10;
  //   const scoreToFixed = score.toFixed(2);

  return (
    <>
      <button type="button">
        <Link to={'/'}>Go back</Link>
      </button>
      <div className="boxMovie">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `http://www.suryalaya.org/images/no_image.jpg`
          }
          width={320}
          height={380}
          loading="lazy"
          alt="poster"
        />
        <div className="infoMovie">
          <title>{original_title}</title>
          <h3>User score: {vote_average}%</h3>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genres</h3>
          <div className="genresList">
            {genres &&
              genres.length &&
              genres.map(({ id, name }) => <li key={id}>{name}</li>)}
          </div>
        </div>
      </div>

      <div className="boxDetails">
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            {' '}
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
