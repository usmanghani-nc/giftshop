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
  Cart,
  CartWrapper,
  CartImgWRapper,
  CartImg,
  CartTitle,
  CartPrice,
  CartHead,
} from './styles';
import { FiUser, FiSearch, FiMenu, FiShoppingCart } from 'react-icons/fi';
import Badge from 'components/badge';
import Button from 'components/button';
import Link from 'components/link';
import { useCartContext } from 'context/AddToCartContext';

export default function Header() {
  const { state } = useCartContext();

  // const url = 'http://localhost:8080/';
  const url = 'https://api-gifty.herokuapp.com/';

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

              <Cart>
                <CartHead>
                  <div className="text">Total</div>
                  <div className="price">
                    ${state.data.reduce((acc, curr) => acc + curr.price, 0)}
                  </div>
                </CartHead>

                {state.data?.length ? (
                  state.data.map((el) => {
                    return (
                      <CartWrapper key={el?._id + Math.random()}>
                        <CartImgWRapper>
                          <CartImg src={`${url}${el?.img}`} />
                        </CartImgWRapper>

                        <div>
                          <CartTitle>
                            {el?.title?.length > 20
                              ? el?.title?.slice(0, 20) + '...'
                              : el?.title}
                          </CartTitle>
                          <CartPrice>${el?.price}</CartPrice>
                        </div>
                      </CartWrapper>
                    );
                  })
                ) : (
                  <div>No Items</div>
                )}
              </Cart>
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
