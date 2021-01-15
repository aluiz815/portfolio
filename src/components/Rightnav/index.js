import React from 'react';

import { Ul } from './styles';

function Rightnav({open}) {
  return (
    <Ul open={open}>
      <li><a href="/">Home</a></li>
      <li><a href="#aboutme">Sobre</a></li>
      <li><a href="#skills">Habilidades</a></li>
      <li><a href="#projects">Projetos</a></li>
      <li><a href="Whatsapp://send?phone=5581982505544">Contato</a></li>
    </Ul>
  );
}

export default Rightnav;