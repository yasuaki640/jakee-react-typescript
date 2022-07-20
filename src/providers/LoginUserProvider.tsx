import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { User } from '../types/user';

type LoginUser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginUser?: LoginUser;
  setLoginUser: Dispatch<SetStateAction<LoginUser | undefined>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType,
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser>();

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
