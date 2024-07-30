import { Members } from 'pages/Members';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MEMEBER = 'member',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MEMEBER]: '/members',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MEMEBER]: {
    path: RoutePath.member,
    element: <Members />
  },
};
