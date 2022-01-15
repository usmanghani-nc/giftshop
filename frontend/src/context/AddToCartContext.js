import { useReducer, useContext, createContext, useEffect } from 'react';
import API from 'endpoint';
import router from 'next/router';

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const initialState = {
  data: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'GET_CART':
      return { ...state, data: action.payload };
    case 'ADD_TO_CART':
      return { ...state, data: action.payload };
    case 'REMOVE_CART':
      return {
        ...state,
        data: action.payload,
      };
    default:
      state;
  }
}

export default function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getAllCart = localStorage.getItem('cart');

    dispatch({
      type: 'GET_CART',
      payload: getAllCart ? JSON.parse(getAllCart) : [],
    });
  }, []);

  const addToCart = ({ cart }) => {
    const getCarts = localStorage.getItem('cart');

    const prevCarts = getCarts ? JSON.parse(getCarts) : [];

    const findDuplicateItem = prevCarts.find((ff) => ff._id === cart._id);

    if (!findDuplicateItem) {
      const setCart = [...prevCarts, cart];

      localStorage.setItem('cart', JSON.stringify(setCart));

      dispatch({ type: 'ADD_TO_CART', payload: setCart });
    }
  };

  const removeCart = (id) => {
    const cart = JSON.parse(localStorage.getItem('cart'));

    const cartRemove = cart.filter((el) => el._id !== id);

    localStorage.setItem('cart', JSON.stringify(cartRemove));

    dispatch({ type: 'REMOVE_CART', payload: cartRemove });
  };

  const checkout = async ({}) => {
    try {
      const cart = JSON.parse(localStorage.getItem('cart'));

      const { data } = await API.post('/checkout', { cart });

      if (data.payload.url) {
        router.push(data.payload.url);

        if (!router.query.cancel) {
          localStorage.removeItem('cart');
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <CartContext.Provider
      value={{
        state: state,
        fn: {
          addToCart,
          removeCart,
          checkout,
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
