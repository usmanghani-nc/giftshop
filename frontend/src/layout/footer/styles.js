import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 3rem 0.5rem 2rem;

  div,
  p,
  h5 {
    color: ${({ theme }) => theme.text};
  }

  .footer-container {
    max-width: 1080px;
    padding: 0 1rem;
    margin: 0 auto;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(483px, 1fr));
  grid-gap: 3rem;
  align-items: center;

  & .heading {
    color: ${({ theme }) => theme.secondary};
    font-size: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    grid-gap: 2rem;
  }
`;

export const Logo = styled.div`
  height: 4rem;
  width: 12rem;

  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    width: 100%;
  }
`;

export const Copyright = styled.div`
  text-align: right;
  & .yaer {
    color: ${({ theme }) => theme.secondary};
    margin-right: 1rem;
  }

  & .link {
    color: ${({ theme }) => theme.primary};
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    text-align: center;
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;
