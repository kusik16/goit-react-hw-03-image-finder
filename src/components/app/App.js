import { Component } from 'react';

import Searchbar from '../searchbar/Searchbar';
import ImageGallery from '../imageGallery/ImageGallery';
import Button from '../button/Button';
import Loader from '../loader/Loader';

import './app.css';

const _apiKey = '29633570-ed278bc3600c586f3f6eb946e';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      status: 'idle',
      page: 1,
      searchText: '',
    };
  }

  handleSearch = e => {
    this.setState({
      searchText: e.target.value,
    });
  };

  _transformImage = image => {
    return {
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
    };
  };

  searchImage = async searchText => {
    try {
      const response = await fetch(
        `https://pixabay.com/api/?q=${this.state.searchText}&page=${this.state.page}&key=${_apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );

      if (!response.ok) {
        throw new Error(`Could not fetch, status: ${response.status}`);
      }

      const data = await response.json();

      return data.hits.map(this._transformImage);
    } catch (e) {
      this.setState({ status: 'error' });
      throw e;
    }
  };

  onSearchImage = (e, searchText) => {
    this.setState({ images: [], page: 1, status: 'loading' });

    e.preventDefault();
    this.searchImage(searchText).then(res =>
      this.setState({
        images: res,
        status: 'loaded',
        page: this.state.page + 1,
      })
    );
  };

  onLoadMore = () => {
    this.setState({ status: 'loading' });

    this.searchImage(this.state.searchText).then(res =>
      this.setState({
        images: [...this.state.images, ...res],
        status: 'loaded',
        page: this.state.page + 1,
      })
    );
  };

  render() {
    return (
      <>
        <div className="app">
          <Searchbar
            searchText={this.searchText}
            handleSearch={this.handleSearch}
            onSearchImage={this.onSearchImage}
          />
          <ImageGallery images={this.state.images} />
          {this.state.status === 'loading' ? <Loader /> : null}
          {this.state.images.length > 1 && this.state.status !== 'loading' ? (
            <Button onLoadMore={this.onLoadMore} />
          ) : null}
        </div>
      </>
    );
  }
}

export default App;
