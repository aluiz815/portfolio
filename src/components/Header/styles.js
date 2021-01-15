import styled from 'styled-components';

export const Navbar = styled.nav`
 width:100%;
 height:55px;
 display:flex;
 justify-content:space-between;
 align-items:center;
 padding:0 20px;
 border-bottom:0.01em solid rgb(204, 204, 204);
 a{
      color:#000;
  }
 ul {
   display:flex;
   flex-flow:row nowrap;
   align-items:center;
   li {
    padding: 18px 10px;
   }
 }
`;
export const HomeHeaderLink = styled.div `
padding:15px 0;
`;