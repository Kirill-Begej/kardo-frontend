import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import { FC } from 'react';
import styles from './FeedBack.module.css';

export const FeedBack: FC = () => {
  return (
    <section className={classNames(styles.section, {}, [])}>
      <div className={classNames(styles.mainContainer, {}, [])}>
        <Link to='/' className={classNames(styles.link, {}, [])}>
          <p className={styles.textLink}>Обратная связь</p>
          <ArrowRight className={classNames(styles.arrow, {}, [])} />
        </Link>
      </div>
    </section>
  );
};
