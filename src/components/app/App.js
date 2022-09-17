import { Component } from 'react';

import Searchbar from '../searchbar/Searchbar';
import ImageGallery from '../imageGallery/ImageGallery';
import Button from '../button/Button';
import Loader from '../loader/Loader';

import app from './App.module.css';
import ImageService from '../../services/ImageService';

class App extends Component {
  state = {
    images: [],
    page: 1,
    searchText: '',
    process: 'idle',
  };

  imageService = new ImageService();

  handleSearch = e => {
    this.setState({
      searchText: e.target.value,
    });
    if (e.target.value !== this.state.searchText) {
      this.setState({
        page: 1,
      });
    }
  };

  scrollToMax = () => {
    let scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    window.scrollBy({
      top: scrollHeight,
      behavior: 'smooth',
    });
  };

  onSearchImage = (e, searchText) => {
    this.setState({ images: [], page: 1, process: 'loading' });

    e.preventDefault();
    this.imageService
      .getImages(this.state.page, searchText)
      .then(res =>
        this.setState({
          images: res,
          page: this.state.page + 1,
          process: 'ok',
        })
      )
      .catch(() =>
        this.setState({
          process: 'error',
        })
      );
  };

  onLoadMore = () => {
    this.setState({ process: 'loading' });

    this.imageService
      .getImages(this.state.page, this.state.searchText)
      .then(res =>
        this.setState({
          images: [...this.state.images, ...res],
          page: this.state.page + 1,
          process: 'ok',
        })
      )
      .then(() =>
        setTimeout(() => {
          this.scrollToMax();
        }, 100)
      )
      .catch(() =>
        this.setState({
          process: 'error',
        })
      );
  };

  render() {
    const { process, images, searchText } = this.state;
    return (
      <>
        <div className={app.app}>
          <Searchbar
            searchText={searchText}
            handleSearch={this.handleSearch}
            onSearchImage={this.onSearchImage}
          />
          {(process === 'ok' || process === 'loading') && (
            <ImageGallery images={images} />
          )}
          {images.length > 1 && process !== 'loading' && (
            <Button onLoadMore={this.onLoadMore} />
          )}
          {process === 'loading' && <Loader />}
        </div>
      </>
    );
  }
}

export default App;
