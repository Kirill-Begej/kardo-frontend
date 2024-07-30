import { FC, startTransition } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

import BackIcon from '../../../assets/images/icons/icon_arrow.svg';

interface HeaderProrps {
  name: string;
  className?: string;
}
export const Header: FC<HeaderProrps> = ({ name, className }) => {
  return (
    <header className={classNames(styles.header, {}, [className])}>
      <article className={classNames(styles.container, {}, [])}>
        <h1 className={classNames(styles.title, {}, [])}>{name}</h1>
          <Link to='/' className={classNames(styles.link, {}, [])}>
            <BackIcon className={classNames(styles.svg, {}, [])} />
          </Link>
      </article>
    </header>
  );
};
