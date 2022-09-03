import PropTypes from 'prop-types';

import './searchbar.css';

const Searchbar = ({ handleSearch, onSearchImage, searchText }) => {
  return (
    <header className="searchbar">
      <form
        onSubmit={e => onSearchImage(e, searchText)}
        className="search-form"
      >
        <button type="submit" className="search-form-button">
          <span className="search-form-button-label">Search</span>
        </button>

        <input
          onChange={e => handleSearch(e)}
          className="search-form-input"
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
  searchText: PropTypes.string.isRequired,
};
