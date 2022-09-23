import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import modal from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ largeImageURL, closeModal, onEscapePress }) => {
  return createPortal(
    <div
      className={modal.overlay}
      onKeyPress={e => onEscapePress(e)}
      onClick={e => closeModal(e)}
    >
      <div className={modal.modal}>
        <img src={largeImageURL} alt="someimage" />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onEscapePress: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
