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

export const ProjectsContainer = styled.div `
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:1.5rem;
a {
  display:flex;
  flex-direction:column;
  align-items:center;
  color:#000;
  padding:1rem;
 &:hover {
   background-color:rgb(0,195,255);
   border-radius: 0.3rem;
   box-shadow: rgba(0,196,255,0.9) 0px 13px 19px -6px;
   transition: all 0.5s ease 0s;
   width:50%;
   color:#fff;
 }
  img {
  max-width:82.75px;
  height:64px;
  max-height:82.75px;
  h3 {
  font-size:1.5rem;
  font-weight:bold;
}
}
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
