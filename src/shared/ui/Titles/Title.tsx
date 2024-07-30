import { FC } from 'react';
import styles from './Titles.module.css';

interface TitleProps {
  isLink: boolean;
  name: string;
}
export const Titles: FC<TitleProps> = ({ isLink, name }) => {
  return (
    <div className={styles.titles}>
      <h2 className={styles.heading}>{name}</h2>
      {isLink ? <a className={styles.link}>Посмотреть все</a> : null}
    </div>
  );
};
