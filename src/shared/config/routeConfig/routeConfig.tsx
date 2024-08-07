import { RouteProps } from 'react-router-dom';
import { ProfilePage } from 'pages/ProfilePage';
import { AccountSettingsPage } from 'pages/AccountSettingsPage';

export enum AppRoutes {
  PROFILE = 'profile',
  ACCOUNT = 'account',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.PROFILE]: '/',
  [AppRoutes.ACCOUNT]: '/account',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.ACCOUNT]: {
    path: RoutePath.account,
    element: <AccountSettingsPage />,
  },
};
