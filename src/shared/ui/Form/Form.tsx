/*
  нужно будет исправить в css цвета, брать из global.css, добавил шрифты,
  + подправить под pixelPerfect + добавить валидацию и глазок для пароля
*/

import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './Form.module.css';
import MainIcon from '../MainIcon/MainIcon';
import AuthIcon from '../AuthIcon/AuthIcon';

interface FormProps {
  children: ReactNode;
  auth: string;
  link: string;
  to: string;
  isLogin: boolean;
  isRegister: boolean;
}

export const Form: FC<FormProps> = ({
  children, auth, link, to, isLogin, isRegister,
}) => {
  return (
    <section className={styles.section}>
      <article className={styles.container}>
        <MainIcon />
        <form className={`${styles.form} ${isLogin ? '' : styles.formRegister}`}>
          {children}
          {isRegister
            ? <p className={styles.condition}>Создавая аккаунт, Вы принимаете
              <Link to={to} className={styles.conditionLink}>Условия использования</Link>
            </p>
            : null}
          <p className={styles.subtitle}>Или</p>
          <ul className={styles.list}>
            <li className={styles.block}>
              <AuthIcon isYandex={true} />
              <p className={styles.text}>Яндекс</p>
            </li>
            <li className={styles.block}>
              <AuthIcon isYandex={false} />
              <p className={styles.text}>Вконтакте</p>
            </li>
          </ul>
          <p className={styles.textLink}>{auth}
            <Link to={to} className={styles.link}>{link}</Link>
          </p>
          {isLogin ? <Link className={styles.password} to='/'>Забыли пароль?</Link> : null}
        </form>
        <Link to='/' className={styles.skip}>Пропустить</Link>
      </article>
    </section>
  );
};
