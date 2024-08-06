import { classNames } from 'shared/lib/classNames/classNames';
import avatar from 'shared/assets/images/Profile/avatar.jpeg';
import Camera from 'shared/assets/images/icons/Camera.svg';
import cls from './AccountAvatar.module.css';

export const AccountAvatar = () => {
  return (
    <section className={classNames(cls.section, {}, [])}>
      <div className={classNames(cls.mainContainer)}>
        <button className={classNames(cls.button)}>
          <Camera className={classNames(cls.camera)} />
          <img src={avatar} alt='аватарка' className={classNames(cls.avatar, {}, [])} />
        </button>
        <p className={classNames(cls.userName, {}, [])}>Василий Петров</p>
      </div>
    </section>
  );
};
