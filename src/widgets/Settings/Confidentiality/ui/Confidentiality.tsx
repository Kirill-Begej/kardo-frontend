import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import { FC } from 'react';
import styles from './Confidentiality.module.css';

export const Confidentiality: FC = () => {
  return (
    <section className={classNames(styles.section, {}, [])}>
      <div className={classNames(styles.mainContainer, {}, [])}>
        <p className={styles.title}>КОНФИДЕНЦИАЛЬНОСТЬ</p>
        <div className={classNames(styles.note, {}, [])}>
          <Link to='/' className={classNames(styles.block, {}, [])}>
            <p className={styles.textLink}>Профиль</p>
            <ArrowRight />
          </Link>
          <div className={classNames(styles.line, {}, [])}></div>
          <Link to='/' className={classNames(styles.block, {}, [])}>
            <p className={styles.textLink}>Политика конфиденциальности</p>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
