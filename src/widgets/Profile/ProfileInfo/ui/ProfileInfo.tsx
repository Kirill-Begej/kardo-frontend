import avatar from 'shared/assets/images/Profile/avatar.jpeg';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <section className={classNames(styles.main, {}, [])}>
      <div className={classNames(styles.mainContent, {}, [])}>
        <img className={classNames(styles.avatar, {}, [])} src={avatar} alt='Аватар пользователя' />
        <div className={classNames(styles.info, {}, [])}>
          <h2 className={classNames(styles.heading, {}, [])}>Василий Петров</h2>
          <p className={classNames(styles.place, {}, [])}>Россия, Москва</p>
          <p className={classNames(styles.hobby, {}, [])}>BMX [Участник]</p>
        </div>
      </div>
    </section>
  );
};
