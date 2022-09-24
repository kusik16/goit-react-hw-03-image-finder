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

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.searchText !== this.state.searchText
    ) {
      this.searchImage(this.state.searchText);
    }
  }

  handleSearchSubmit = (e, searchText) => {
    e.preventDefault();
    this.setState({ searchText, images: [], page: 1 });
  };

  searchImage = searchText => {
    this.setState({
      process: 'loading',
    });
    this.imageService
      .getImages(this.state.page, searchText)
      .then(res => {
        this.setState({
          images: [...this.state.images, ...res],
          process: 'ok',
        });
      })
      .catch(() =>
        this.setState({
          process: 'error',
        })
      );
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { process, images } = this.state;
    return (
      <>
        <div className={app.app}>
          <Searchbar onSearchSubmit={this.handleSearchSubmit} />
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
