import { RouteProps } from 'react-router-dom';
import { CommunityPage } from 'pages/CommunityPage';

export enum AppRoutes {
  COMMUNITY = 'community',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.COMMUNITY]: '/',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.COMMUNITY]: {
    path: RoutePath.community,
    element: <CommunityPage />,
  },
};
