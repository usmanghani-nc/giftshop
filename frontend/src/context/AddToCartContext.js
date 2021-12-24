import { useReducer, useContext, createContext, useEffect } from 'react';

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
      return { ...state, data: [...state.data, action.payload] };
    case 'REMOVE_CART':
      return { ...state };
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

    const setCart = [...prevCarts, cart];

    localStorage.setItem('cart', JSON.stringify(setCart));

    dispatch({ type: 'ADD_TO_CART', payload: setCart });
  };

  const removeCart = ({ cart }) => {
    dispatch({ type: 'REMOVE_CART', payload: cart });
  };

  return (
    <CartContext.Provider
      value={{
        state: state,
        fn: {
          addToCart,
          removeCart,
        },
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
