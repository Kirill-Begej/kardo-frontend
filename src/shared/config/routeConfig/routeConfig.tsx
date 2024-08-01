import { RouteProps } from 'react-router-dom';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';

export enum AppRoutes {
  LOGIN = 'login',
  REGISTER = 'register',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTER]: '/register',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath.register,
    element: <RegisterPage />,
  },
};
