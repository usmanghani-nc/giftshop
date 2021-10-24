import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from './theme';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
      }

    html,
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: 'Inter', sans-serif;
        transition: all 0.3s;
        font-size: ${({ theme }) => theme.sizes.xlg};
        box-sizing: border-box;
        scroll-behavior: smooth;

        h1 {
          font-size: ${({ theme }) => theme.sizes.h1};
          color: ${({ theme }) => theme.black};
        }

        h2 {
          font-size: ${({ theme }) => theme.sizes.h2};
          color: ${({ theme }) => theme.black};
        }

        h3{
          font-size: ${({ theme }) => theme.sizes.h3};
          color: ${({ theme }) => theme.black};
        }

        h4 {
          font-size: ${({ theme }) => theme.sizes.h4};
          color: ${({ theme }) => theme.black};
        } 

        h5 {
          font-size: ${({ theme }) => theme.sizes.h5};
          color: ${({ theme }) => theme.black};
        }  
        
        h6 {
          font-size: ${({ theme }) => theme.sizes.h6};
          color: ${({ theme }) => theme.black};
        }

        p,a,section,div,span,li,ul,ol,footer,header,nav,main {
          font-size: ${({ theme }) => theme.sizes.text};
          color: ${({ theme }) => theme.text};
        }

        @media (max-width:${({ theme }) => theme.responsive.lg} ) {
              font-size: ${({ theme }) => theme.sizes.lg};
        }
        
        @media (max-width:${({ theme }) => theme.responsive.md} ) {
            font-size: ${({ theme }) => theme.sizes.md};
        }

        @media (max-width:${({ theme }) => theme.responsive.sm} ) {
           font-size: ${({ theme }) => theme.sizes.sm};
        }

        @media (max-width:${({ theme }) => theme.responsive.xs} ) {
           font-size: ${({ theme }) => theme.sizes.xs};
        } 
      }
`;

export default function Global(props) {
  return (
    <ThemeProvider theme={props.dark ? darkTheme : lightTheme}>
      <GlobalStyle />

      {props.children}
    </ThemeProvider>
  );
}
