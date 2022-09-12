import PropTypes from 'prop-types';

import button from './Button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button className={button.loadMore} onClick={() => onLoadMore()}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
