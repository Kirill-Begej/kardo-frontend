import { Timer } from 'shared/ui/Timer/Timer';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>До гранд-финала КАРДО [7]:</h1>
      <Timer />
    </header>
  );
};
