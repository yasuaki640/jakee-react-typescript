import { Home } from '../pages/Home';
import { UserManagement } from '../pages/UserManagement';
import { Setting } from '../pages/Setting';

type Route = {
  path: string;
  children: JSX.Element;
};

export const homeRoutes: Route[] = [
  {
    path: '',
    children: <Home />,
  },
  {
    path: 'user_management',
    children: <UserManagement />,
  },
  {
    path: 'setting',
    children: <Setting />,
  },
];
