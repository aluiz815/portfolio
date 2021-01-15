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

export const SkillContainer = styled.div `
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:1.5rem;
img {
  width:64px;
  max-width:82.75px;
  height:64px;
  max-height:82.75px;
}
h3 {
  font-size:1.5rem;
  font-weight:bold;
}
`;
