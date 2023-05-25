import PropTypes from 'prop-types';

function SearchInput({ onSubmit }) {
  const [name, setName] = useState('');

  const onChangeName = e => setName(e.currentTarget.value);

  return (
    <input
      className={css.input}
      onChange={onChangeName}
      type="text"
      name="name"
      value={name}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
  );
}

SearchInput.prototype = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchInput;
