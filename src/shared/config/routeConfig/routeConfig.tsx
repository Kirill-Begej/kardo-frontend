import { RouteProps } from 'react-router-dom';
import { Onboarding } from '../../../pages/Onboarding/index';

export enum AppRoutes {
  ONBOARDING = 'main',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ONBOARDING]: '/',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ONBOARDING]: {
    path: RoutePath.main,
    element: <Onboarding />,
  },
};
