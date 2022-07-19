import { Home } from '../components/pages/Home';
import { UserManagement } from '../components/pages/UserManagement';
import { Setting } from '../components/pages/Setting';

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
