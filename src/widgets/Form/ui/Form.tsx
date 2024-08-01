/*
  нужно будет исправить в css цвета, брать из global.css, добавил шрифты,
  + подправить под pixelPerfect + добавить валидацию и глазок для пароля
*/

import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import AuthIcon from 'shared/ui/AuthIcon/AuthIcon';
import cls from './Form.module.css';

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
    <form className={`${cls.form} ${isLogin ? '' : cls.formRegister}`}>
      {children}
      {isRegister
        ? <div className={cls.content}>
          <p className={cls.condition}>Создавая аккаунт, Вы принимаете
            <Link to={to} className={cls.conditionLink}>Условия использования</Link>
          </p>
        </div>
        : null}
      <p className={cls.subtitle}>Или</p>
      <ul className={cls.list}>
        <li className={cls.block}>
          <AuthIcon isYandex={true} />
          <p className={cls.text}>Яндекс</p>
        </li>
        <li className={cls.block}>
          <AuthIcon isYandex={false} />
          <p className={cls.text}>Вконтакте</p>
        </li>
      </ul>
      <p className={cls.textLink}>{auth}
        <Link to={to} className={cls.link}>{link}</Link>
      </p>
      {isLogin ? <Link className={cls.password} to='/'>Забыли пароль?</Link> : null}
    </form>
  );
};
