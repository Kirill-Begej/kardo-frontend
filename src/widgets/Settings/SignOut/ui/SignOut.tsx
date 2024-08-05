import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import SignOutIcon from 'shared/assets/images/icons/SignOut.svg';
import { FC } from 'react';
import styles from './SignOut.module.css';

export const SignOut: FC = () => {
  return (
    <section className={classNames(styles.section, {}, [])}>
      <div className={classNames(styles.mainContainer, {}, [])}>
        <Link to='/' className={classNames(styles.link, {}, [])}>
          <SignOutIcon className={classNames(styles.icon)} />
          <p className={styles.textLink}>Выйти из аккаунта</p>
        </Link>
      </div>
    </section>
  );
};
