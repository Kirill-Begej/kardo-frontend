import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import { FC } from 'react';
import styles from './General.module.css';

export const General: FC = () => {
  return (
    <section className={classNames(styles.section, {}, [])}>
      <div className={classNames(styles.mainContainer, {}, [])}>
        <p className={styles.title}>Общие</p>
        <Link to='/' className={classNames(styles.link, {}, [])}>
          <p className={styles.textLink}>Аккаунт</p>
          <ArrowRight className={classNames(styles.arrow, {}, [])} />
        </Link>
      </div>
    </section>
  );
};
