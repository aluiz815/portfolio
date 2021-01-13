import styled from 'styled-components';

export const Navbar = styled.nav`
 width:100%;
 display:flex;
 align-items:center;
 padding:10px;
 border-bottom:0.01em solid rgb(204, 204, 204);
 a{
      color:#000;
  }
 ul {
   display:flex;
   width:50%;
   align-items:center;
   li {
     margin-right:1rem;
   }
  
 }
 @media(max-width:768px) {
  ul {
   display:flex;
   width:70%;
   align-items:center;
   li {
     margin-right:1rem;
   }
 }
}
`;
export const HomeHeaderLink = styled.div `
width:80%;
a {
  font-weight:500;
  font-size:1.5rem;
}
`;