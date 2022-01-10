import API from 'endpoint';
import { useReducer, useContext, createContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const initialState = {
  user: null,
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return {
        user: action.payload,
        loading: false,
      };

    case 'LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'ERROR':
      return {
        user: action.payload,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUser = async () => {
    try {
      const { data } = await API.get('/');

      dispatch({ type: 'CURRENT_USER', payload: data });
    } catch (e) {
      dispatch({ type: 'ERROR', payload: e.messag });
      console.error(e.message);
    }
  };

  const login = async (userData) => {
    try {
      const { data } = await API.post('/login', {
        userData,
      });

      dispatch({ type: 'CURRENT_USER', payload: data });
    } catch (e) {
      dispatch({ type: 'ERROR', payload: e.messag });
      console.error(e.message);
    }
  };

  const signup = async (userData, callBack) => {
    try {
      dispatch({ type: 'LOADING' });

      const { data } = await API.post('/signup', userData);

      localStorage.setItem('token', data.payload.token);

      dispatch({ type: 'CURRENT_USER', payload: data });

      callBack();
    } catch (e) {
      dispatch({ type: 'ERROR', payload: e.messag });
      console.error(e.message);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state: state,
        fn: { signup, login },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
