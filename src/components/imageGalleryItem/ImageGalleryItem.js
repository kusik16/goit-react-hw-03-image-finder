import { Component } from 'react';
import Modal from '../modal/Modal';
import PropTypes from 'prop-types';

import { scrollToMax } from 'utils/functions';
import imageGalleryItem from './ImageGalleryItem.module.css';
export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    scrollToMax();
  }

  static propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
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
