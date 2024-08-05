import { RouteProps } from 'react-router-dom';
import { ProfilePage } from 'pages/ProfilePage';
import { SettingsPage } from 'pages/SettingsPage';
import { AccountSettingsPage } from 'pages/AccountSettingsPage';

export enum AppRoutes {
  PROFILE = 'profile',
  SETTINGS = 'settings',
  ACCOUNT = 'account',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.PROFILE]: '/',
  [AppRoutes.SETTINGS]: '/settings',
  [AppRoutes.ACCOUNT]: '/account',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.SETTINGS]: {
    path: RoutePath.settings,
    element: <SettingsPage />,
  },
  [AppRoutes.ACCOUNT]: {
    path: RoutePath.account,
    element: <AccountSettingsPage />,
  },
};
