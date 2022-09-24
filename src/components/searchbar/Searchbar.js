import PropTypes from 'prop-types';
import { Component } from 'react';

import searchbar from './Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQuery = e => {
    this.setState({ query: e.target.value });
  };

  static propTypes = {
    onSearchSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { query } = this.state;
    const { onSearchSubmit } = this.props;

    return (
      <header className={searchbar.header}>
        <form
          onSubmit={e => onSearchSubmit(e, query)}
          className={searchbar.form}
        >
          <button type="submit" className={searchbar.btn}>
            <span className={searchbar.btnLabel}>Search</span>
          </button>

          <input
            onChange={this.handleQuery}
            className={searchbar.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
