import avatar from 'shared/assets/images/Profile/avatar.jpeg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <section className={classNames(cls.main, {}, [])}>
      <div className={classNames(cls.mainContent, {}, [])}>
        <img className={classNames(cls.avatar, {}, [])} src={avatar} alt='Аватар пользователя' />
        <div className={classNames(cls.info, {}, [])}>
          <h2 className={classNames(cls.heading, {}, [])}>Василий Петров</h2>
          <p className={classNames(cls.place, {}, [])}>Россия, Москва</p>
          <p className={classNames(cls.hobby, {}, [])}>BMX [Участник]</p>
        </div>
      </div>
    </section>
  );
};
