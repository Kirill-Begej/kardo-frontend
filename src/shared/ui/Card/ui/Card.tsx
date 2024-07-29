import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import LinkIcon from '../../../assets/images/icons/Arrow_kardo_orange.svg';

import image from '../../../assets/images/dance.png';

export const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt='#' />
      <h2 className={styles.cardHeading}>Национальный этап:
      Коста-Рика</h2>
      <p className={styles.cardSubtitle}>
        23 июня, стартует национальный этап конкурс-премии «КАРДО» в Коста-Рике
        по направлениям BMX и Breaking.
      </p>
      <Link to='/current' className={styles.cardLink}>
        <LinkIcon />
      </Link>
    </div>
  );
};
