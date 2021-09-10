import React from 'react';
import PropTypes from 'prop-types';
import { FcLikePlaceholder } from 'react-icons/fc';

import { ImgWraper, Img, Button } from './styled';

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const PhotoCard = ({ id, likes, src }) => (
  <article>
    <a href={`/detail/${id}`}>
      <ImgWraper>
        <Img src={src} alt={id} />
      </ImgWraper>
    </a>
    <Button type="button">
      <FcLikePlaceholder size="32" />
      {likes}
      {' '}
      likes
    </Button>
  </article>
);

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  likes: PropTypes.number,
  src: PropTypes.string,
};

PhotoCard.defaultProps = {
  likes: 0,
  src: DEFAULT_IMAGE,
};

export default PhotoCard;
