import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import './imageGallery.css';

const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className="gallery">
        {images.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
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
