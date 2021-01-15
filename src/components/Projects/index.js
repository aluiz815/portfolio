import React from 'react';
import { Container,ProjectsContainer,ButtonsContainer } from './styles';
import Proffy_img from '../../assets/proffy.png';
function Projects() {
  return (
    <>
      <h1 style={{textAlign:'center',textTransform:'uppercase',fontWeight:'bold'}}>PROJETOS</h1>
      <Container id="projects">
        <ProjectsContainer>
          <a href="https://github.com/aluiz815/proffy">
            <img src={Proffy_img} alt="proffy_image"/>
            <h3>Proffy</h3>
          </a>
          
        </ProjectsContainer>
        <ProjectsContainer>
          <a href="https://github.com/aluiz815/be-the-hero">
            <img src="https://raw.githubusercontent.com/aluiz815/be-the-hero/7bf66f230bde58c7dffba988e1a502272cbba629/frontend/src/assets/logo.svg" alt="be-the-hero_image"/>
            <h3>Be the hero</h3>
          </a>
          
        </ProjectsContainer>
        <ProjectsContainer>
          <a href="https://github.com/aluiz815/picpay_clone">
            <img src="https://github.com/aluiz815/picpay_clone/blob/master/assets/01@3x.png?raw=true" alt="picpay_image"/>
            <h3>Picpay Clone</h3>
          </a>
          
        </ProjectsContainer>
        <ButtonsContainer>
          <a href="https://github.com/aluiz815">Mais Projetos</a>
        </ButtonsContainer>
      </Container>
    </>
  );
}

export default Projects;