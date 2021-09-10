import React from 'react';
import PropTypes from 'prop-types';
import {
  Link, Image, ImagePlaceholder, EmogiPlaceholder,
} from './styles';

const Category = ({ cover, id, emoji }) => (
  <div>
    <Link to={`/pet/${id}`}>
      {cover ? (
        <Image src={cover} alt="test" />
      ) : (
        <ImagePlaceholder />
      )}
      {emoji ? (
        <span>{emoji}</span>
      ) : (
        <EmogiPlaceholder />
      )}
    </Link>
  </div>
);

Category.propTypes = {
  cover: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  emoji: PropTypes.string,
};
Category.defaultProps = {
  cover: null,
  id: '',
  emoji: '',
};

export default Category;
