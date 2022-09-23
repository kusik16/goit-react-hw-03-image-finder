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
  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
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
        <li onClick={this.toggleModal} className={imageGalleryItem.item}>
          <img
            className={imageGalleryItem.itemImage}
            src={webformatURL}
            alt="someimage"
          />
        </li>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
