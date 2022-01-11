import API from 'endpoint';
import { useReducer, useContext, createContext, useEffect } from 'react';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const [state, dispatch] = useReducer(reducer, initialState);

  const getUser = async () => {
    try {
      dispatch({ type: 'LOADING' });

      const { data } = await API.get('/');
      dispatch({ type: 'CURRENT_USER', payload: data });
    } catch (e) {
      dispatch({ type: 'ERROR', payload: e.messag });
      console.error(e.message);
    }
  };

  const login = async (userData) => {
    try {
      // dispatch({ type: 'LOADING' });

      const { data } = await API.post('/login', userData);
      if (data.payload.token) {
        localStorage.setItem('token', data.payload.token);

        dispatch({ type: 'CURRENT_USER', payload: data.payload.user });

        router.push('/');
      } else {
        dispatch({ type: 'CURRENT_USER', payload: null });
      }
    } catch (e) {
      dispatch({ type: 'ERROR', payload: e.messag });
      console.error(e.message);
    }
  };

  const signup = async (userData) => {
    try {
      // dispatch({ type: 'LOADING' });

      const { data } = await API.post('/signup', userData);

      if (data.payload.token) {
        localStorage.setItem('token', data.payload.token);

        dispatch({ type: 'CURRENT_USER', payload: data.payload.user });

        router.push('/');
      } else {
        dispatch({ type: 'CURRENT_USER', payload: null });
      }
    } catch (e) {
      dispatch({ type: 'ERROR', payload: e.messag });
      console.error(e.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');

    dispatch({ type: 'CURRENT_USER', payload: null });
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        state: state,
        fn: { signup, login, logout },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
