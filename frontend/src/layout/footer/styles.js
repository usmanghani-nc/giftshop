import styled from 'styled-components';

export const FooterStyles = styled.footer`
  background-color: #404864;
  padding: 3rem 0.5rem 2rem;

  div,
  p,
  h5 {
    color: white;
  }

  .footer-container {
    max-width: 1080px;
    padding: 0 1rem;
    margin: 0 auto;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 3rem;
  & .heading {
    color: #aec1d1;
    margin-bottom: 1.5rem;
    font-size: 3rem;
  }

  & .heading-sm {
    color: #aec1d1;
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.border}};

  & .yaer {
    color: white;
    margin-right: 1rem;
  }

  & .link {
    color: #b6c7ff;
    text-decoration: underline;
  }

  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    justify-content: flex-start;
    padding-right: 2rem;
    padding-left: 2rem;
  }
`;
