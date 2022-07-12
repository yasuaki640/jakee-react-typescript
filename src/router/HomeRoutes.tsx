import { Home } from '../pages/Home';
import { UserManagement } from '../pages/UserManagement';
import { Setting } from '../pages/Setting';

export const homeRoutes = [
  {
    path: '/',
    children: <Home />,
  },
  {
    path: '/user_management',
    children: <UserManagement />,
  },
  {
    path: '/setting',
    children: <Setting />,
  },
];
