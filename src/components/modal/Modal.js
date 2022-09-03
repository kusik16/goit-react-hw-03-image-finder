import PropTypes from 'prop-types';

import './modal.css'

const Modal = ({ largeImageURL, handleModal, onEscapePress }) => {
  return (
    <div
      class="overlay"
      onKeyPress={e => onEscapePress(e)}
      onClick={() => handleModal()}
    >
      <div class="modal">
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
