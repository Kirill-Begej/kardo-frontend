import { classNames } from 'shared/lib/classNames/classNames';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'shared/ui/Navbar';
import cls from './AppPage.module.css';

interface AppPageProps {
  className?: string;
}

const AppPage = ({ className }: AppPageProps) => {
  return (
    <div className={classNames(cls.appPage, {}, [className])}>
      <Outlet />
      <Navbar className={classNames(cls.navbar, {}, [])} />
    </div>
  );
};

export default AppPage;
