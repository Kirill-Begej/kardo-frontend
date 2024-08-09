import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import SettingsIcon from 'shared/assets/images/icons/GearSix.svg';
import cls from './HeaderMain.module.css';

import BackIcon from '../../../assets/images/icons/icon_arrow.svg';

interface HeaderProrps {
  name: string;
  to?: string;
  className?: string;
  isUserProfile: boolean;
  isMainPage: boolean;
}

export const HeaderMain: FC<HeaderProrps> = ({
  name, className, to, isUserProfile, isMainPage,
}) => {
  return (
    <header className={classNames(cls.header, {}, [className])}>
      <article className={classNames(cls.headerContainer, {}, [])}>
        <h1 className={classNames(cls.title, {}, [])}>{name}</h1>
        {isMainPage && (
          <Link to={to} className={classNames(cls.link, {}, [])}>
            <BackIcon className={classNames(cls.svg, {}, [])} />
          </Link>
        )}
        {isUserProfile && (
          <Link to='/settings' className={classNames(cls.button, {}, [])}>
            <SettingsIcon />
          </Link>
        )}
      </article>
    </header>
  );
};
