import { useCallback, useState } from 'react';
import axios from 'axios';
import { User } from '../types/user';
import { useMessage } from './useMessage';

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch(() =>
        showMessage({ title: 'Failed to fetch users.', status: 'error' }),
      )
      .finally(() => setLoading(false));
  }, [showMessage]);
  return { getUsers, users, loading };
};
