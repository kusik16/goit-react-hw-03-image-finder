import PropTypes from 'prop-types';

import searchbar from './Searchbar.module.css';

const Searchbar = ({ handleSearch, onSearchImage, searchText }) => {
  return (
    <header className={searchbar.header}>
      <form
        onSubmit={e => onSearchImage(e, searchText)}
        className={searchbar.form}
      >
        <button type="submit" className={searchbar.btn}>
          <span className={searchbar.btnLabel}>Search</span>
        </button>

        <input
          onChange={e => handleSearch(e)}
          className={searchbar.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  onSearchImage: PropTypes.func.isRequired,
  searchText: PropTypes.string,
};
