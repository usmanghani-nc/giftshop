import styled from 'styled-components';

export const HeaderStyles = styled.header`
  background-color: white;
  padding: 1rem 0.5rem;

  .header-container {
    max-width: 1080px;
    padding: 0 1rem;
    margin: 0 auto;
  }
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: space-between;
  align-items: center;
  grid-gap: 1rem;

  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Logo = styled.div``;

export const LogoIMG = styled.img`
  width: 11.5rem;

  @media (max-width: ${({ theme }) => theme.responsive.xsm}) {
    width: 20rem;
  }
`;

export const Nav = styled.nav`
  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.li``;

export const UserDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    display: none;
  }
`;

export const Manu = styled.div`
  justify-self: end;
  display: flex;
  align-self: center;
  display: none;

  & .menu {
    font-size: 35px;
    color: ${({ theme }) => theme.black};
  }

  @media (max-width: ${({ theme }) => theme.responsive.md}) {
    display: block;
  }
`;

export const UserICon = styled.div`
  font-size: 1.8rem;
  cursor: pointer;
  transition: all 0.25s;
  color: ${({ theme }) => theme.black};
  position: relative;
  &:not(:last-child) {
    margin-right: 3rem;
  }

  & .user-item-count {
    position: absolute;
    top: -5px;
    right: -10px;
  }
`;
