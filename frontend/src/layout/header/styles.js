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
`;

export const Logo = styled.div`
  height: 6rem;
  width: 6rem;
`;

export const LogoIMG = styled.img``;

export const Nav = styled.nav``;

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
`;
