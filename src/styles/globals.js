import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

ul,li {
  list-style:none;
}

a {
  text-decoration: none;
  cursor: pointer;
}

* {
  outline:none;
  box-sizing: border-box;
}
`;

