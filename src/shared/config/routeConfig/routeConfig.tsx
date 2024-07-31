import { RouteProps } from 'react-router-dom';
import { News } from 'pages/News';
import { CurrentNews } from 'pages/CurrentNews';

export enum AppRoutes {
  NEWS = 'news',
  CURRENTNEWS = 'currentnews',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.NEWS]: '/news',
  [AppRoutes.CURRENTNEWS]: '/current',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.NEWS]: {
    path: RoutePath.news,
    element: <News />,
  },
  [AppRoutes.CURRENTNEWS]: {
    path: RoutePath.currentnews,
    element: <CurrentNews />,
  },
};
