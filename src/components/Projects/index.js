import React from 'react';
import { Container,ProjectsContainer,ProjectsWrapper,ProjectImg,ProjectInfo,ProjectText,ButtonsContainer } from './styles';
import Proffy_img from '../../assets/proffy.png';
function Projects() {
  return (
    <>
      <h1 style={{textAlign:'center',textTransform:'uppercase',fontWeight:'bold'}}>PROJETOS</h1>
      <Container id="projects">
        <ProjectsContainer>
          <ProjectsWrapper href="https://github.com/aluiz815/proffy">
            <ProjectInfo>
              <ProjectImg src={Proffy_img}/>
            </ProjectInfo>
            <ProjectText>Proffy</ProjectText>
          </ProjectsWrapper>
        </ProjectsContainer>
        <ProjectsContainer>
          <ProjectsWrapper href="https://github.com/aluiz815/be-the-hero">
            <ProjectInfo>
              <ProjectImg src="https://raw.githubusercontent.com/aluiz815/be-the-hero/7bf66f230bde58c7dffba988e1a502272cbba629/frontend/src/assets/logo.svg"/>
            </ProjectInfo>
            <ProjectText>Be The Hero</ProjectText>
          </ProjectsWrapper>
        </ProjectsContainer>
        <ProjectsContainer>
          <ProjectsWrapper href="https://github.com/aluiz815/picpay_clone">
            <ProjectInfo>
              <ProjectImg src="https://github.com/aluiz815/picpay_clone/blob/master/assets/01@3x.png?raw=true"/>
            </ProjectInfo>
            <ProjectText>Picpay Clone</ProjectText>
          </ProjectsWrapper>
        </ProjectsContainer>
        <ButtonsContainer>
          <a href="https://github.com/aluiz815">Mais Projetos</a>
        </ButtonsContainer>
      </Container>
    </>
  );
}

export default Projects;