import { HeaderStyles, GridBox, Nav } from './styles';
import Button from 'components/button';
import { useCartContext } from 'context/AddToCartContext';
import Modal from 'components/modal';
import Sidebar from './side-bar';
import List from './list';
import Logo from './logo';
import UserDiv from './user';
import { useState } from 'react';

export default function Header({ user, logoutAction }) {
  const { state, fn } = useCartContext();

  const [toggle, setToggle] = useState(false);

  return (
    <HeaderStyles>
      <div className="header-container">
        <GridBox>
          <Logo />

          <Nav>
            <List />
          </Nav>

          <UserDiv
            state={state}
            user={user}
            logoutAction={logoutAction}
            fn={fn}
            setToggle={() => setToggle(!toggle)}
          />
        </GridBox>
      </div>

      <Modal toggle={fn.removeModal} isOpen={state.noCheckout}>
        <h3
          style={{
            marginBottom: '3rem',
            textAlign: 'center',
            fontSize: '2rem',
          }}
        >
          You must login first to add items in Cart
        </h3>
        <Button action={fn.removeModal} href="/login" block>
          Login
        </Button>
      </Modal>

      <Sidebar active={toggle} user={user} logoutAction={logoutAction} />
    </HeaderStyles>
  );
}
