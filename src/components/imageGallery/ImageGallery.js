import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import gallery from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className={gallery.list}>
        {images.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              id={id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
