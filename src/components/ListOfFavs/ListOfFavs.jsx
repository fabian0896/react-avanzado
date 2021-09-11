import React from 'react';
import PropTypes from 'prop-types';

import { Image, Grid, Link } from './styled';

const ListOfFavs = ({ favs }) => (
  <Grid>
    {favs.map((fav) => (
      <Link key={fav.id} to={`/detail/${fav.id}`}>
        <Image src={fav.src} />
      </Link>
    ))}
  </Grid>
);

ListOfFavs.propTypes = {
  favs: PropTypes.arrayOf(PropTypes.any),
};

ListOfFavs.defaultProps = {
  favs: [],
};

export default ListOfFavs;
