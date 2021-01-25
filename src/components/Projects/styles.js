import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  display:grid;
  grid-template-columns:repeat(3,1fr);
  padding: 4rem 1rem;
  @media(max-width:425px) {
    grid-template-columns:repeat(1,1fr);
  }
`;

export const ProjectInfo = styled.div`
  width:64px;
  height:64px;
  display:flex;
  align-items:center;
`;

export const ProjectsContainer =styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:end;
`;

export const ProjectsWrapper = styled.a`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:1rem;
  width:177px;
  &:hover {
    background-color: rgb(0, 195, 255);
    border-radius: 0.3rem;
    box-shadow: rgb(0 196 255 / 90%) 0px 13px 19px -6px;
    transition: all 0.5s ease 0s;
    h2 {
      color: rgb(255, 255, 255);
    }
    
}

@media(max-width:565px) {
  width:130px;
}

@media(max-width:425px) {
      margin-top:1rem;
}
`;

export const ProjectImg = styled.img`
  width:64px;
`;
export const ProjectText = styled.h2`
  color:#000;
  font-weight:bold;
  font-size:1.5rem;
  margin-top:.5rem;
  @media(max-width:710px){
    font-size:1rem;
  }
  @media(max-width:450px){
    font-size:.8rem;
  }
`;

export const ButtonsContainer = styled.div `
display:grid;
justify-content:center;
grid-column:span 3;
margin:2.5rem;
@media(max-width:425px) {
  grid-column:span 1;
}
a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: rgb(0, 195, 255);
  border-radius: 0.3rem;
  box-shadow: rgba(0, 196, 255, 0.9) 0px 13px 19px -6px;
  transition: all 0.5s ease 0s;
}
`
