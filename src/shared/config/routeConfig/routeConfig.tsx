import { RouteProps } from 'react-router-dom';
import { OnboardingPage } from 'pages/OnboardingPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';

export enum AppRoutes {
  ONBOARDING = 'main',
  LOGIN = 'login',
  REGISTER = 'register',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ONBOARDING]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTER]: '/register',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ONBOARDING]: {
    path: RoutePath.main,
    element: <OnboardingPage />,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.REGISTER]: {
    path: RoutePath.register,
    element: <RegisterPage />,
  },
};
