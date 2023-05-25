import { Link, useSearchParams, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { searchMovies } from '../../services/Api/api';
import { useState, useEffect } from 'react';
import SearchForm from 'components/Search/SearchForm';

// import { Search } from 'components/Search/Search';
// import css from './MoviesPage.module.css';

function MoviesPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('movieName') ?? '';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    if (movieName.trim() === '') {
      // alert.error('Enter text to search');
      return;
    }
    setIsLoading(true);

    searchMovies(moviesList).then(data => {
      if (!data.results.length) {
        setIsLoading(false);
        setError(true);
        return console.log(
          'There is no movies with this request. Please, try again'
        );
      }
      setError(false);
      setMoviesList(data.results);
      setIsLoading(false);
    });
  }, [moviesList]);

  const handleSubmit = e => {
    e.preventDefault();

    const searchForm = e.currentTarget;
    setSearchParams(e.currentTarget.value.toLowerCase());
    searchForm.reset();
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {error && <p>There is no movies with this request. Please, try again</p>}
      <div>
        {moviesList.map(movie => (
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
}

export default MoviesPage;
