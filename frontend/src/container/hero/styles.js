import styled from 'styled-components';

export const HeroStyles = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10rem;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.responsive.lg}) {
    padding: 5rem;
  }

  & .ballons-float {
    position: absolute;
    font-size: 30rem;
    color: #f4f5f7;

    @media (max-width: ${({ theme }) => theme.responsive.lg}) {
      display: none;
    }
  }

  & .ballons-float-1 {
    top: 2rem;
    left: 0;
  }

  & .ballons-float-2 {
    bottom: -3rem;
    right: 0;
  }

  & .hero-cta {
    @media (max-width: ${({ theme }) => theme.responsive.sm}) {
      width: 100%;
    }
  }
`;

export const HeroTitle = styled.h1`
  color: ${({ theme }) => theme.secondary};
  font-weight: 500;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    font-size: 2.2rem;
  }
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.secondary};
  font-weight: 600;
  font-size: 3.5rem;
  width: 30%;
  text-align: center;
  margin: 0 auto 1.5rem;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.responsive.xxlg}) {
    width: 40%;
  }

  @media (max-width: ${({ theme }) => theme.responsive.xlg}) {
    width: 45%;
  }

  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    font-size: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.responsive.sm}) {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.responsive.xs}) {
    width: 100%;
  }

  & .gift-icon {
    color: ${({ theme }) => theme.primary};
    font-size: 2.2rem;
    margin-left: 1rem;
    transform: rotate(20deg);
  }
`;

export const HeroDescription = styled.p`
  margin-bottom: 4rem;
  font-size: 1.8rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    font-size: 1.6rem;
    margin-bottom: 3rem;
  }
`;
