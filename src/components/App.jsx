// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// const Layout = lazy(() => import('components/Layout/Layout'));
// const Cast = lazy(() => import('components/Cast/Cast'));
// const Reviews = lazy(() => import('components/Reviews/Reviews'));
// const HomePage = lazy(() => import('pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
// const MovieDetails = lazy(() =>
//   import('pages/MovieDetails/MovieDetails')
// );
import Layout from 'components/Layout/Layout';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';

// import NotFound from '/pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
