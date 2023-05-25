import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../../services/Api/api';

const MovieDetailsPage = () => {
  const [movieDatail, setMovieDatail] = useState({});
  const location = useLocation();
  const { movieId } = useParams();
  const { original_title, overview, genres, poster_path, vote_average } =
    movieDatail;

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovieDatail(data));
  }, [movieId]);

  const score = vote_average * 10;
  const scoreToFixed = score.toFixed();

  return (
    <>
      <button type="button">
        <Link to={location.state?.from ?? '/'}>Go back</Link>
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
          <h2>{original_title}</h2>
          <h3>User score: {scoreToFixed}%</h3>
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
            <Link to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li>
            {' '}
            <Link to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
