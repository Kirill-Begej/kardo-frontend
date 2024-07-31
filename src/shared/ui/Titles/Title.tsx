import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Titles.module.css';

interface TitleProps {
  isLink: boolean;
  name: string;
  link: string;
  className?: string;
}
export const Titles: FC<TitleProps> = ({
  isLink, name, link, className,
}) => {
  return (
    <div className={classNames(styles.titles, {}, [className])}>
      <h2 className={classNames(styles.heading, {}, [])}>{name}</h2>
      {isLink
        ? <Link to={link} className={classNames(styles.link, {}, [])}>
          Посмотреть все
        </Link> : null}
    </div>
  );
};
