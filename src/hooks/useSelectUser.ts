import { useCallback, useState } from 'react';
import { User } from '../types/user';

type Props = {
  id: number;
  users: User[];
  onOpen: () => void;
};

// 選択したユーザー情報を特定しモーダルを表示するカスタムフック
export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User>();

  const onSelectUser = useCallback((props: Props) => {
    const { id, users } = props;
    const targetUser = users.find((user) => user.id === id);
    setSelectedUser(targetUser);
  }, []);

  return { onSelectUser, selectedUser };
};
