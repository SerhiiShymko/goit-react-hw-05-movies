import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import MovieDetails from '../components/MovieDetails/MovieDetails';

// import NotFound from '/pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
