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

  handleModal = () => {
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
        <li
          onClick={() => this.handleModal()}
          className={imageGalleryItem.item}
        >
          <img
            className={imageGalleryItem.itemImage}
            src={webformatURL}
            alt="someimage"
          />
        </li>
        {this.state.showModal && (
          <Modal
            onEscapePress={this.onEscapePress}
            handleModal={this.handleModal}
            largeImageURL={largeImageURL}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
