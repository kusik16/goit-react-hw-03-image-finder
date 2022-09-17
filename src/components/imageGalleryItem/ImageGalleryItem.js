import { Component } from 'react';
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';

import imageGalleryItem from './ImageGalleryItem.module.css';

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

  openModal = e => {
    this.setState({ showModal: true });
  };

  closeModal = e => {
    if (e.target.tagName !== 'IMG') {
      this.setState({ showModal: false });
    }
  };

  static propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <>
        <li onClick={e => this.openModal(e)} className={imageGalleryItem.item}>
          <img
            className={imageGalleryItem.itemImage}
            src={webformatURL}
            alt="someimage"
          />
        </li>
        {this.state.showModal && (
          <Modal
            onEscapePress={this.onEscapePress}
            closeModal={this.closeModal}
            largeImageURL={largeImageURL}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
