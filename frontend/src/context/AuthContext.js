import API from 'endpoint';
import {
  useReducer,
  useContext,
  createContext,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { useQuery, useQueryClient } from 'react-query';

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
  const queryClient = useQueryClient();

  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);

  const getUser = () => API.get('/');

  const { data, isLoading, isError, error, refetch } = useQuery(
    'user',
    getUser,
    {
      staleTime: 30000,
    }
  );

  if (isError) {
    dispatch({ type: 'ERROR', payload: error.messag });
  }

  const login = async (userData) => {
    try {
      dispatch({ type: 'ERROR', payload: '' });

      setLoading(true);

      const { data } = await API.post('/login', userData);

      if (data.payload.token) {
        localStorage.setItem('token', data.payload.token);

        dispatch({ type: 'TOKEN', payload: data.payload.token });

        setLoading(false);

        await refetch();

        data.payload.token && router.push('/');
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

        await refetch();

        data.payload.token && router.push('/');
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
    queryClient.setQueryData('user', () => undefined);
    queryClient.removeQueries('user');
  };

  return (
    <AuthContext.Provider
      value={{
        state: {
          ...state,
          formLoading: loading,
          user: data?.data,
          isLoading,
        },
        fn: { signup, login, logout, setLoading },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
