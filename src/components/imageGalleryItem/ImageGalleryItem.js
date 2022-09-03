import { Component } from 'react';
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';

import './imageGalleryItem.css';

class ImageGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onEscapePress, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscapePress, false);
  }

  onEscapePress = e => {
    if (e.key === 'Escape') {
      this.setState({ showModal: false });
    }
  };

  handleModal = () => {
    console.log();
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <>
        <li onClick={() => this.handleModal()} className="gallery__item">
          <img
            className="gallery__item_image"
            src={webformatURL}
            alt="someimage"
          />
        </li>
        {this.state.showModal ? (
          <Modal
            onEscapePress={this.onEscapePress}
            handleModal={this.handleModal}
            largeImageURL={largeImageURL}
          />
        ) : null}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
