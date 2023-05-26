import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

const SearchForm = ({ onSubmit }) => {
  return (
    <div className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <button className={css.searchFormButton} type="submit">
          <FaSearch size={12} />
        </button>

        <input
          className={css.input}
          name="movieName"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="May contain only letters, apostrophe, dash and spaces. For example moon"
          required
          autoComplete="off"
          autoFocus
          placeholder="Search movie..."
        />
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
