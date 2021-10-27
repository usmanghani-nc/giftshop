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

        p,section,div,span,li,ul,ol,footer,header,nav,main,button,input,textarea,label{
          color: ${({ theme }) => theme.text};
          font-size:${({ theme }) => theme.sizes.text} ;
          font-weight: 500;
          font-style: normal;
          font-family: inherit;
          padding: 0;
          margin: 0;  
          line-height: 1.4;
        }

        ol, ul {
          list-style: none;
        }

        img {
          height: auto;
          max-width: 100%;
        }

        a {
            text-decoration: none;
            color:${({ theme }) => theme.black};
            font-weight: 500;
            transition: all .3s;
            display: inline-block;
            cursor: pointer;

            &:hover {
              color:${({ theme }) => theme.primary};
            }
        }

        .container {
          max-width: 1080px;
          padding: 0 2rem;
          flex: 1 1 calc(100vh - 121px);
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
