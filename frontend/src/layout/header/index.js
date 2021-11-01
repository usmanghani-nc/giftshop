import { HeaderStyles, Logo, GridBox, LogoIMG, Ul, Nav, UserDiv, Item, Manu } from './styles';
import { FiUser, FiSearch, FiMenu } from 'react-icons/fi';

import Button from 'components/button';

import Link from 'components/link';
export default function Header() {
  return (
    <HeaderStyles>
      <div className="header-container">
        <GridBox>
          <Logo>
            <LogoIMG src="img/logo.svg" alt="Giftshop" className="" alt="Giftshop" />
          </Logo>

          <Nav>
            <Ul>
              <Item>
                <Link href="/login" m={'0 3rem 0 0'}>
                  Home
                </Link>
              </Item>
              <Item>
                <Link href="/login" m={'0 3rem 0 0'}>
                  Eid Gifts
                </Link>
              </Item>
              <Item>
                <Link href="/login" m={'0 3rem 0 0'}>
                  Birthdays Gifts
                </Link>
              </Item>
              <Item>
                <Link href="/login" m={'0'}>
                  Wedding Gifts
                </Link>
              </Item>
            </Ul>
          </Nav>

          <UserDiv>
            {/* <FiUser />
            <FiSearch /> */}
            <Link href="/login" m={'0 2.5rem 0 0'}>
              Login
            </Link>

            <Button href="/signup">Sign Up</Button>
          </UserDiv>

          <Manu>
            <FiMenu className="menu" />
          </Manu>
        </GridBox>
      </div>
    </HeaderStyles>
  );
}
