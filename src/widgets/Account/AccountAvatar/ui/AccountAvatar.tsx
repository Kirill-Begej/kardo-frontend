import { classNames } from 'shared/lib/classNames/classNames';
import avatar from 'shared/assets/images/Profile/avatar.jpeg';
import Camera from 'shared/assets/images/icons/Camera.svg';
import styles from './AccountAvatar.module.css';

export const AccountAvatar = () => {
  return (
    <section className={classNames(styles.section, {}, [])}>
      <div className={classNames(styles.mainContainer)}>
        <button className={classNames(styles.button)}>
          <Camera className={classNames(styles.camera)} />
          <img src={avatar} alt='аватарка' className={classNames(styles.avatar, {}, [])} />
        </button>
        <p className={classNames(styles.userName, {}, [])}>Василий Петров</p>
      </div>
    </section>
  );
};
