import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;

  --ff-poppins: "Poppins", sans-serif;
  --ff-roboto: "Roboto", sans-serif;
}

*:focus {
  outline: transparent;
  box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.CAKE_100};
}



body {
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  
  font-size: 1.6rem;
  font-family: var(--ff-poppins);

  -webkit-font-smoothing: antialiased;
}

a {
  text-decoration: none;
}

button, a {
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover {
  filter: brightness(0.9);
}






`
