import styled from 'styled-components';

export const Ul = styled.ul`
    display:flex;
    flex-flow:row nowrap;
    li {
      padding: 18px 10px;
      a{
        color: rgb(109, 109, 109);
        &:hover {
          transition: .1s ease-in-out;
          text-decoration:underline;
          color:#000;
        } 
      }
    }

    @media (max-width:768px) {
      flex-flow:column nowrap;
      background-color:rgb(0,195,255);
      position:absolute;
      transform:${({open})=> open ? 'translateY(0)' : 'translateY(-100%)'};
      top:0;
      left:0;
      right:0;
      text-align:center;
      transition:transform 0.3s ease-in-out;
      border-radius:0px 0px 10px 10px;
      li {
        a {
          color:#fff;
          font-weight:bold;
          &:hover {
          transition: .1s ease-in-out;
          text-decoration:underline;
          color:#fff;
        } 
        }
      }
    }
`;
