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
}
h3 {
  color:#000;
  font-weight:bold;
  font-size:1.5rem;
  margin-top:.5rem;
  @media(max-width:620px){
    font-size:1rem;
  }
  @media(max-width:477px){
    font-size:.8rem;
  }
}
`;


export const SkillsWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding:1rem;
  width:177px;   

@media(max-width:565px) {
  width:130px;
}

@media(max-width:425px) {
      margin-top:1rem;
}
`;

export const SkillImg = styled.img`
  width:64px;
`;
export const SkillText = styled.h2`
  color:#000;
  font-weight:bold;
  font-size:1.3rem;
  margin-top:1rem;
  @media(max-width:570px){
    font-size:.9rem;
  }
`;

export const SkillInfo = styled.div`
  width:64px;
  height:64px;
  display:flex;
  align-items:center;
`;