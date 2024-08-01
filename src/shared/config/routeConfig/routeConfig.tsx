import { RouteProps } from 'react-router-dom';
import { OnboardingPage } from 'pages/OnboardingPage';

export enum AppRoutes {
  ONBOARDING = 'main',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ONBOARDING]: '/',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ONBOARDING]: {
    path: RoutePath.main,
    element: <OnboardingPage />,
  },
};
