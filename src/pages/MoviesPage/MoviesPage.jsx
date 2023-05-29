import { Link, useSearchParams, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { searchMovies } from '../../services/Api/api';
import { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setMoviesList([]);
    setIsLoading(true);

    searchMovies(movieName).then(data => {
      if (!data || !data.results || data.results.length === 0) {
        setIsLoading(false);
        setError(true);

        return console.log(
          'There are no movies for this request. Please, try again'
        );
      }
      setError(false);
      setMoviesList(data.results);
      setIsLoading(false);
    });
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();

    const search = e.currentTarget;
    setSearchParams({ movieName: search.elements.movieName.value });
    search.reset();
  };

  return (
    <main className={css.container}>
      <SearchForm onSubmit={handleSubmit} setSearchParams={setSearchParams} />
      {error && <p>There is no movies with this request. Please, try again</p>}
      <ul>
        {moviesList.map(movie => (
          <li key={movie.id} className={css.listColor}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.original_title || movie.name}
            </Link>
          </li>
        ))}
        {isLoading && <Loader />}
      </ul>
    </main>
  );
};

export default MoviesPage;
