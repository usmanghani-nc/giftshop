import { HeaderStyles, Logo, GridBox, LogoIMG, Ul, Nav, UserDiv } from './styles';
import { FiUser, FiSearch } from 'react-icons/fi';

import Link from 'components/link';
export default function Header() {
  return (
    <HeaderStyles>
      <div className="header-container">
        <GridBox>
          <Logo>
            <LogoIMG src="img/logo.png" alt="Giftshop" className="" alt="Giftshop" />
          </Logo>

          <Nav>
            <Ul>
              <li>
                <Link href="/login" m={'0 1.2rem 0 0'}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/login" m={'0 1.2rem 0 0'}>
                  Birthdays Gifts
                </Link>
              </li>
              <li>
                <Link href="/login" m={'0 1.2rem 0 0'}>
                  Eid Gifts
                </Link>
              </li>
              <li>
                <Link href="/login" m={'0 1.2rem 0 0'}>
                  Wedding Gifts
                </Link>
              </li>
            </Ul>
          </Nav>

          <UserDiv>
            <FiUser />
            <FiSearch />
            <Link href="/login" m={'0 1.2rem 0 0'}>
              Login
            </Link>
            <Link href="/signup">Sign Up</Link>
          </UserDiv>
        </GridBox>
      </div>
    </HeaderStyles>
  );
}
