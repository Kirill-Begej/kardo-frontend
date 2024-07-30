import { Members } from 'pages/Members';
import { VideoPlayer } from 'pages/VideoPlayer';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MEMEBER = 'member',
  PLAYER = 'video',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MEMEBER]: '/members',
  [AppRoutes.PLAYER]: '/video',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MEMEBER]: {
    path: RoutePath.member,
    element: <Members />,
  },
  [AppRoutes.PLAYER]: {
    path: RoutePath.video,
    element: <VideoPlayer />,
  },
};
