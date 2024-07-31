import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './Card.module.css';
import LinkIcon from '../../../assets/images/icons/Arrow_kardo_orange.svg';
import image from '../../../assets/images/dance.png';

interface CardProps {
  className?: string;
}

export const Card: FC = ({ className }: CardProps) => {
  return (
    <div className={classNames(styles.card, {}, [className])}>
      <img className={classNames(styles.cardImage, {}, [])} src={image} alt='#' />
      <h2 className={classNames(styles.cardHeading, {}, [])}>Национальный этап:
      Коста-Рика</h2>
      <p className={classNames(styles.cardSubtitle, {}, [])}>
        23 июня, стартует национальный этап конкурс-премии «КАРДО» в Коста-Рике
        по направлениям BMX и Breaking.
      </p>
      <Link to='/current' className={classNames(styles.cardLink, {}, [])}>
        <LinkIcon />
      </Link>
    </div>
  );
};
