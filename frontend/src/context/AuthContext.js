import API from 'endpoint';
import {
  useReducer,
  useContext,
  createContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const initialState = {
  user: null,
  loading: true,
  error: null,
  token: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      };

    case 'TOKEN':
      return {
        ...state,
        token: action.payload,
        error: null,
      };

    case 'LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'ERROR':
      return {
        error: action.payload,
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
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    try {
      dispatch({ type: 'LOADING' });

      const { data } = await API.get('/');
      dispatch({ type: 'CURRENT_USER', payload: data });

      state.token && router.push('/');
    } catch (e) {
      dispatch({ type: 'ERROR', payload: e.messag });
      console.error(e.message);
    }
  };

  const login = async (userData) => {
    try {
      dispatch({ type: 'ERROR', payload: '' });

      setLoading(true);

      const { data } = await API.post('/login', userData);

      if (data.payload.token) {
        localStorage.setItem('token', data.payload.token);

        dispatch({ type: 'TOKEN', payload: data.payload.token });

        setLoading(false);
      } else {
        dispatch({ type: 'ERROR', payload: data.error });
        setLoading(false);
      }
    } catch (e) {
      dispatch({ type: 'ERROR', payload: e.messag });
      setLoading(false);

      console.error(e.message);
    }
  };

  const signup = async (userData) => {
    try {
      dispatch({ type: 'ERROR', payload: '' });

      setLoading(true);

      const { data } = await API.post('/signup', userData);
      if (data.payload.token) {
        localStorage.setItem('token', data.payload.token);

        dispatch({ type: 'TOKEN', payload: data.payload.token });
        setLoading(false);
      } else {
        dispatch({ type: 'ERROR', payload: data.error });
        setLoading(false);
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
  }, [state.token]);

  return (
    <AuthContext.Provider
      value={{
        state: {
          ...state,
          formLoading: loading,
        },
        fn: { signup, login, logout, setLoading },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
