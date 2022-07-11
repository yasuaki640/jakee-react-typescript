import { FC } from 'react';
import { User } from './types/user';

type Props = {
  user: User;
};

export const UserProfile: FC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>name</dt>
      <dd>{user.name}</dd>
      <dt>hobby</dt>
      <dd>{user.hobbies.join(' / ')}</dd>
    </dl>
  );
};
