import React from 'react';

import { Navbar,HomeHeaderLink } from './styles';

function Header() {
  return (
      <Navbar>
        <HomeHeaderLink><a href="/">Andre luiz</a></HomeHeaderLink>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Sobre</a></li>
          <li><a href="/">Projetos</a></li>
          <li><a href="/">Contato</a></li>
        </ul>
      </Navbar>
  );
}

export default Header;