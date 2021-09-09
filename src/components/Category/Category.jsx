import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

const Category = ({ cover, path, emoji }) => (
  <div>
    <a href={path}>
      <img src={cover} alt="test" />
      {emoji}
    </a>
  </div>
);

Category.propTypes = {
  cover: PropTypes.string,
  path: PropTypes.string,
  emoji: PropTypes.string,
};
Category.defaultProps = {
  cover: DEFAULT_IMAGE,
  path: '',
  emoji: '?',
};

export default Category;
