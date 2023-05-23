// import PropTypes from 'prop-types';
import { getTrending } from '../../services/Api/api';
import Loader from '../../components/Loader/Loader';
// import css from './HomePage.module.css';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrending().then(data => {
      setTrendMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <div>
        {trendMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </Link>
          </li>
        ))}
        {isLoading && <Loader />}
      </div>
    </>
  );
};

export default HomePage;
