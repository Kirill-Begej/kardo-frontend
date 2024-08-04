import PlusIcon from 'shared/assets/images/icons/Plus.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ProfileHobby.module.css';

export const ProfileHobby = () => {
  return (
    <section className={classNames(styles.hobby, {}, [])}>
      <div className={classNames(styles.hobbyContainer, {}, [])}>
        <div className={classNames(styles.card, {}, [])}>
          <h2 className={classNames(styles.title, {}, [])}>Интересы</h2>
          <ul className={classNames(styles.list, {}, [])}>
            <li className={classNames(styles.item, {}, [])}>
              <p className={classNames(styles.heading, {}, [])}>BMX</p>
            </li>
            <li className={classNames(styles.item, {}, [])}>
              <p className={classNames(styles.heading, {}, [])}>Брейкинг</p>
            </li>
            <li className={classNames(styles.item, {}, [])}>
              <p className={classNames(styles.heading, {}, [])}>Хип-хоп</p>
            </li>
            <li className={classNames(styles.item, {}, [])}>
              <p className={classNames(styles.heading, {}, [])}>Воркаут</p>
            </li>
            <li className={classNames(styles.item, {}, [])}>
              <p className={classNames(styles.heading, {}, [])}>Паркур</p>
            </li>
            <li className={classNames(styles.itemPlus, {}, [])}>
              <PlusIcon />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
