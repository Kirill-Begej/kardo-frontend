import { RouteProps } from 'react-router-dom';
import { OnboardingPage } from 'pages/OnboardingPage';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { Main } from 'widgets/Main';
import { Profile } from 'widgets/Profile';

export enum AppRoutes {
  ONBOARDING = 'onboarding',
  LOGIN = 'login',
  REGISTER = 'register',
}

export enum AppPageRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ONBOARDING]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.REGISTER]: '/register',
};

export const AppPageRoutePath: Record<AppPageRoutes, string> = {
  [AppPageRoutes.MAIN]: '/main',
  [AppPageRoutes.PROFILE]: '/profile',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ONBOARDING]: {
    path: RoutePath.onboarding,
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

export const appPageRouterConfig: Record<AppPageRoutes, RouteProps> = {
  [AppPageRoutes.MAIN]: {
    path: AppPageRoutePath.main,
    element: <Main />,
  },
  [AppPageRoutes.PROFILE]: {
    path: AppPageRoutePath.profile,
    element: <Profile />,
  },
};
