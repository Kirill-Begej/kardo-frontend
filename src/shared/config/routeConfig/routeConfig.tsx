import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { TestPage } from 'pages/TestPage';

export enum AppRoutes {
  MAIN = 'main',
  TEST = 'test',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.TEST]: '/test',
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
};
