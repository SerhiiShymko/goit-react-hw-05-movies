// import { useParams } from 'react-router-dom';
import { useState } from 'react';
// import PropTypes from 'prop-types';
import css from './MoviesPage.module.css';

function MoviesPage({ onSubmit }) {
  const [query, setQuery] = useState('');

  const onChangeInput = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (query.trim() === '') {
      alert.error('Enter text to search');
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onSubmitForm}>
        <button className={css.searchFormButton} type="submit">
          {/* <FaSearch size={12} /> */}
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={onChangeInput}
        />
      </form>
    </header>
  );
}

// MoviesPage.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default MoviesPage;
