import {
  HeaderStyles,
  Logo,
  GridBox,
  LogoIMG,
  Ul,
  Nav,
  UserDiv,
  Item,
  Manu,
  UserICon,
} from './styles';
import { FiUser, FiSearch, FiMenu, FiShoppingCart } from 'react-icons/fi';
import Badge from 'components/badge';
import Button from 'components/button';
import Link from 'components/link';
import { useCartContext } from 'context/AddToCartContext';

export default function Header() {
  const { state } = useCartContext();

  return (
    <HeaderStyles>
      <div className="header-container">
        <GridBox>
          <Logo>
            <LogoIMG
              src="img/logo.svg"
              alt="Giftshop"
              className=""
              alt="Giftshop"
            />
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
            <UserICon>
              <FiSearch className="icons" />
            </UserICon>
            <UserICon>
              <Badge className="user-item-count">{state.data.length}</Badge>
              <FiShoppingCart className="icons" />
            </UserICon>
            <UserICon>
              <FiUser className="icons" />
            </UserICon>

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
