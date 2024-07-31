import { FC } from 'react';
import styles from './Titles.module.css';
import { Link } from 'react-router-dom';

interface TitleProps {
  isLink: boolean;
  name: string;
  link: string;
}
export const Titles: FC<TitleProps> = ({ isLink, name, link }) => {
  return (
    <div className={styles.titles}>
      <h2 className={styles.heading}>{name}</h2>
      {isLink ? <Link to={link} className={styles.link}>Посмотреть все</Link> : null}
    </div>
  );
};
