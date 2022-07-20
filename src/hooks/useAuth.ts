import { useCallback, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { User } from '../types/user';
import { useNavigate } from 'react-router-dom';
import { useMessage } from './useMessage';
import { useLoginUser } from './useLoginUser';

const messages: { [key: number]: string } = {
  200: 'Successfully login.',
  404: 'User not found.',
  500: 'Unexpected error occurred.',
};

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);

      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10;
            setLoginUser({ ...res.data, isAdmin });
            showMessage({ title: messages[res.status], status: 'success' });
            navigate('/home');
          }
        })
        .catch((e: AxiosError) => {
          const title = messages[e.response?.status || 500];
          showMessage({ title, status: 'error' });
        })
        .finally(() => setLoading(false));
    },
    [navigate, showMessage, setLoginUser],
  );
  return { login, loading };
};
