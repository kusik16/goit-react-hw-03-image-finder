import { Component } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import modal from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.onEscapePress, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.onEscapePress, false);
  }

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };

  handleEscape = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={modal.overlay} onClick={this.handleOverlayClick}>
        <div className={modal.modal}>
          <img src={this.props.largeImageURL} alt="someimage" />
        </div>
      </div>,
      modalRoot
    );
  }
}
