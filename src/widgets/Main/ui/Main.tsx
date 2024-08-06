import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Main.module.css';

interface MainProps {
  className?: string;
}

export const Main = ({ className }: MainProps) => {
  return (
    <div className={classNames(cls.main, {}, [className])}>
      main page
    </div>
  );
};
