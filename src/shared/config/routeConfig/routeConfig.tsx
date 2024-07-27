import { RouteProps } from 'react-router-dom';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';

export enum AppRoutes {
  LOGIN = 'signin',
  REGISTER = 'signup',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: '/',
  [AppRoutes.REGISTER]: '/signup',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.LOGIN]: {
    path: RoutePath.signin,
    element: <Login />,
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath.signup,
    element: <Register />,
  },
};
