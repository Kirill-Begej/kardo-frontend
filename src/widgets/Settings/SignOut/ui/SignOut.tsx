import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import SignOutIcon from 'shared/assets/images/icons/SignOut.svg';
import { FC } from 'react';
import cls from './SignOut.module.css';

export const SignOut: FC = () => {
  return (
    <section className={classNames(cls.section, {}, [])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <Link to='/' className={classNames(cls.link, {}, [])}>
          <SignOutIcon className={classNames(cls.icon)} />
          <p className={cls.textLink}>Выйти из аккаунта</p>
        </Link>
      </div>
    </section>
  );
};
