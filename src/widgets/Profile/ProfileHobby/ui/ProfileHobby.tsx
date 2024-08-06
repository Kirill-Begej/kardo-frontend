import PlusIcon from 'shared/assets/images/icons/Plus.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileHobby.module.css';

export const ProfileHobby = () => {
  return (
    <section className={classNames(cls.hobby, {}, [])}>
      <div className={classNames(cls.hobbyContainer, {}, [])}>
        <div className={classNames(cls.card, {}, [])}>
          <h2 className={classNames(cls.title, {}, [])}>Интересы</h2>
          <ul className={classNames(cls.list, {}, [])}>
            <li className={classNames(cls.item, {}, [])}>
              <p className={classNames(cls.heading, {}, [])}>BMX</p>
            </li>
            <li className={classNames(cls.item, {}, [])}>
              <p className={classNames(cls.heading, {}, [])}>Брейкинг</p>
            </li>
            <li className={classNames(cls.item, {}, [])}>
              <p className={classNames(cls.heading, {}, [])}>Хип-хоп</p>
            </li>
            <li className={classNames(cls.item, {}, [])}>
              <p className={classNames(cls.heading, {}, [])}>Воркаут</p>
            </li>
            <li className={classNames(cls.item, {}, [])}>
              <p className={classNames(cls.heading, {}, [])}>Паркур</p>
            </li>
            <li className={classNames(cls.itemPlus, {}, [])}>
              <PlusIcon />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
