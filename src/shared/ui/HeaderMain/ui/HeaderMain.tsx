import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './HeaderMain.module.css';

import BackIcon from '../../../assets/images/icons/icon_arrow.svg';

interface HeaderProrps {
  name: string;
  to?: string;
  className?: string;
}

export const HeaderMain: FC<HeaderProrps> = ({ name, className, to }) => {
  return (
    <header className={classNames(cls.header, {}, [className])}>
      <article className={classNames(cls.headerContainer, {}, [])}>
        <h1 className={classNames(cls.title, {}, [])}>{name}</h1>
        <Link to={to} className={classNames(cls.link, {}, [])}>
          <BackIcon className={classNames(cls.svg, {}, [])} />
        </Link>

      </article>
    </header>
  );
};
