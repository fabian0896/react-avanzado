import React from 'react';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import PropTypes from 'prop-types';

import { Button } from './styled';

const FavButton = ({ liked, likes, onClick }) => (
  <Button onClick={onClick} type="button">
    {liked ? (
      <FcLike size="32" />
    ) : (
      <FcLikePlaceholder size="32" />
    )}
    {likes}
    {' '}
    likes
  </Button>
);

FavButton.propTypes = {
  liked: PropTypes.bool,
  likes: PropTypes.number,
  onClick: PropTypes.func,
};
FavButton.defaultProps = {
  liked: false,
  likes: 0,
  onClick: () => {},
};

export default FavButton;
