import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { TestPage } from 'pages/TestPage';
import { Onboarding } from '../../../widgets/Onboarding/index'

export enum AppRoutes {
  MAIN = 'main',
  TEST = 'test',
  ONBOARDING = 'test2'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.TEST]: '/test',
  [AppRoutes.ONBOARDING]: '/test2',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.TEST]: {
    path: RoutePath.test,
    element: <TestPage />,
  },
  [AppRoutes.ONBOARDING]: {
    path: RoutePath.test2,
    element: <Onboarding /> 
  }
};
