import PropTypes from 'prop-types';

import modal from './Modal.module.css';

const Modal = ({ largeImageURL, handleModal, onEscapePress }) => {
  return (
    <div
      className={modal.overlay}
      onKeyPress={e => onEscapePress(e)}
      onClick={() => handleModal()}
    >
      <div className={modal.modal}>
        <img src={largeImageURL} alt="someimage" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  handleModal: PropTypes.func.isRequired,
  onEscapePress: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
