import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import { FC } from 'react';
import styles from './Safe.module.css';

export const Safe: FC = () => {
  return (
    <section className={classNames(styles.notification, {}, [])}>
      <div className={classNames(styles.mainContainer, {}, [])}>
      <p className={styles.title}>БЕЗОПАСНОТЬ</p>
        <div className={classNames(styles.note, {}, [])}>
          <Link to='/' className={classNames(styles.block, {}, [])}>
            <p className={styles.textLink}>Изменить пароль</p>
            <ArrowRight />
          </Link>
          <div className={classNames(styles.line, {}, [])}></div>
          <Link to='/' className={classNames(styles.block, {}, [])}>
            <p className={styles.textLink}>Активные сеансы</p>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
