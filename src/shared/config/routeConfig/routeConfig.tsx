import { RouteProps } from 'react-router-dom';
import { OnboardingPage } from 'pages/OnboardingPage';
import { NavBar } from 'pages/NavBar';

export enum AppRoutes {
  ONBOARDING = 'main',
  NAVBAR = 'navbar',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ONBOARDING]: '/',
  [AppRoutes.NAVBAR]: '/nav',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ONBOARDING]: {
    path: RoutePath.main,
    element: <OnboardingPage />,
  },
  [AppRoutes.NAVBAR]: {
    path: RoutePath.navbar,
    element: <NavBar />
  }
};
