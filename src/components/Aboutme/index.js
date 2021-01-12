import React from 'react';
import { Container,Info,ButtonsContainer } from './styles';


function Aboutme() {
  return (
    <Container>
      <Info>
        <h1>Eu sou André Luiz</h1>
        <p>Programador apaixonado cursando Ciência da Computação na FG. Programei diversos projetos por conta própria como hobby. <br/>
        Busco um trabalho em que eu possa utilizar meu conhecimento adquirido tanto em cursos quanto em meus projetos pessoais.</p>
        <ButtonsContainer>
          <a href="/">Meu Curriculo</a>
          <a href="/">Entre em contato</a>
        </ButtonsContainer>
      </Info>
    </Container>
  );
}

export default Aboutme;