import React from 'react';
import PropTypes from 'prop-types';
import { Anchor, Image } from './styles';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

const Category = ({ cover, path, emoji }) => (
  <div>
    <Anchor href={path}>
      <Image src={cover} alt="test" />
      {emoji}
    </Anchor>
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
  emoji: 'Pepe',
};

export default Category;
