import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Header.module.css';

import BackIcon from '../../../assets/images/icons/icon_arrow.svg';

interface HeaderProrps {
  name: string;
  to?: string;
  className?: string;
}

export const HeaderMain: FC<HeaderProrps> = ({ name, className, to }) => {
  return (
    <header className={classNames(styles.header, {}, [className])}>
      <article className={classNames(styles.headerContainer, {}, [])}>
        <h1 className={classNames(styles.title, {}, [])}>{name}</h1>
          <Link to={to} className={classNames(styles.link, {}, [])}>
            <BackIcon className={classNames(styles.svg, {}, [])} />
          </Link>
      </article>
    </header>
  );
};
