import { Timer } from 'shared/ui/Timer/Timer';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={classNames(styles.header, {}, [className])}>
      <h1 className={classNames(styles.title, {}, [])}>До гранд-финала КАРДО [7]:</h1>
      <Timer />
    </header>
  );
};
