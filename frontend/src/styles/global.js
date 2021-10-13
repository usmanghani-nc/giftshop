import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './theme';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

    *,*::after ,*::before {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
      }

    html ,body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: 'Roboto', sans-serif;
        transition: all 0.50s linear;
        font-size: 62.5%;
        box-sizing: border-box;
      }
`;

export default function (props) {
  return (
    <ThemeProvider theme={props.dark ? darkTheme : lightTheme}>
      <GlobalStyle />

      {props.children}
    </ThemeProvider>
  );
}
