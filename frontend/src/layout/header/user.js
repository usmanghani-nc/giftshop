import {
  UserDiv,
  UserICon,
  Cart,
  CartWrapper,
  CartImgWRapper,
  CartImg,
  CartTitle,
  CartPrice,
  CartHead,
  Manu,
} from './styles';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import Badge from 'components/badge';
import Button from 'components/button';
import Link from 'components/link';
import { FiMenu } from 'react-icons/fi';
export default function UserComponent({
  user,
  state,
  logoutAction,
  fn,
  setToggle,
}) {
  return (
    <UserDiv>
      {user?.data?._id ? (
        <>
          <UserICon className="cart">
            <Badge className="user-item-count">{state.data.length}</Badge>
            <FiShoppingCart className="icons" />

            <Cart>
              <div className="wrapper">
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
                          <CartImg src={`${el?.img}`} />
                        </CartImgWRapper>

                        <div className="cart-right">
                          <div>
                            <CartTitle>
                              {el?.title?.length > 10
                                ? el?.title?.slice(0, 10) + ' ...'
                                : el?.title}
                            </CartTitle>
                            <CartPrice>${el?.price}</CartPrice>
                          </div>

                          <div
                            className="trash"
                            onClick={() => fn.removeCart(el._id)}
                          >
                            Trash
                          </div>
                        </div>
                      </CartWrapper>
                    );
                  })
                ) : (
                  <div
                    style={{
                      marginBottom: 20,
                    }}
                  >
                    No Items
                  </div>
                )}

                <Button action={fn.checkout} block secondary>
                  Checkout
                </Button>
              </div>
            </Cart>
          </UserICon>

          <UserICon className="cart">
            <FiUser className="icons" />
            <Cart>
              <div className="wrapper">
                <div
                  style={{
                    borderBottom: '1px solid #DEE7EB',
                    paddingBottom: '1rem',
                    color: '#000',
                  }}
                >
                  {user.data.fullName}
                </div>

                <Button
                  action={logoutAction}
                  style={{
                    background: 'none',
                    padding: 0,
                    minWidth: 'auto',
                    height: 'auto',
                    paddingTop: '1rem',
                  }}
                >
                  <div
                    style={{
                      color: 'black',
                      fontSize: '1.3rem',
                    }}
                  >
                    Logout
                  </div>
                </Button>
              </div>
            </Cart>
          </UserICon>
        </>
      ) : (
        <>
          <Link href="/login" m={'0 2.5rem 0 0'}>
            Login
          </Link>

          <Button href="/signup">Sign Up</Button>
        </>
      )}

      <Manu onClick={setToggle}>
        <FiMenu className="menu" />
      </Manu>
    </UserDiv>
  );
}
