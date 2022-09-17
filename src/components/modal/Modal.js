import PropTypes from 'prop-types';

import modal from './Modal.module.css';

const Modal = ({ largeImageURL, closeModal, onEscapePress }) => {
  return (
    <div
      className={modal.overlay}
      onKeyPress={e => onEscapePress(e)}
      onClick={e => closeModal(e)}
    >
      <div className={modal.modal}>
        <img src={largeImageURL} alt="someimage" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onEscapePress: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
