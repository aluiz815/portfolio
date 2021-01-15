import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: 4rem 1rem;
  @media (max-width:768px) {
    margin-top:6rem;
  }
`;

export const Info = styled.div`
  text-align:start;
  padding: 4rem 1rem;
  h1{
    font-weight:bold;
    font-size:2.25rem;
    margin: 0 0 1.45rem;
  }
  p {
    color: gray;
    margin-bottom: 2rem;
  }
`;

export const ButtonsContainer = styled.div `
display:flex;
align-items:center;
a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: rgb(0, 195, 255);
  border-radius: 0.3rem;
  box-shadow: rgba(0, 196, 255, 0.9) 0px 13px 19px -6px;
  transition: all 0.5s ease 0s;
  :first-child {
    margin-right: 1rem;
    background: rgb(249, 249, 249);
    color: rgb(0, 195, 255);
    box-shadow: rgb(185, 185, 185) 0px 13px 19px -6px;
  }
}
`
