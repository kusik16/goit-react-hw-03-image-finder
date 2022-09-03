import PropTypes from 'prop-types';

import './button.css'

const Button = ({ onLoadMore }) => {
  return (
    <button className="load-more" onClick={() => onLoadMore()}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
