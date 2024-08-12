import { AppPage } from 'pages/AppPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { appPageRouterConfig, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader/PageLoader';

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        <Route element={<AppPage />}>
          {Object.values(appPageRouterConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
