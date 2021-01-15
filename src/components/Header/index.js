import React from 'react';
import { Navbar,HomeHeaderLink } from './styles';
import BurguerHeader from '../BurguerHeader';
function Header() {
  return (
      <Navbar>
        <HomeHeaderLink><a href="/">Andre luiz</a></HomeHeaderLink>
        <BurguerHeader/>
      </Navbar>
  );
}

export default Header;