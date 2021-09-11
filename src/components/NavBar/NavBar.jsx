import React from 'react';

import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';
import { Nav, Link } from './styled';

const SIZE = '32px';

const NavBar = () => (
  <Nav>
    <Link exact activeClassName="active" to="/">
      <MdHome size={SIZE} />
    </Link>
    <Link activeClassName="active" to="/favs">
      <MdFavoriteBorder size={SIZE} />
    </Link>
    <Link activeClassName="active" to="/user">
      <MdPersonOutline size={SIZE} />
    </Link>
  </Nav>
);

export default NavBar;
