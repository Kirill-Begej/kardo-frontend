import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import BackIcon from '../../../assets/images/icons/icon_arrow.svg';

interface HeaderProrps {
  name: string;
}
export const Header: FC<HeaderProrps> = ({ name }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{name}</h1>
      <Link to='/' className={styles.link}>
        <BackIcon className={styles.svg} />
      </Link>
    </header>
  );
};
