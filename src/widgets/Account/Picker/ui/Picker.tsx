import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Picker.module.css';

export const Picker = () => {
  return (
    <section className={classNames(styles.section, {}, [])}>
      <div className={classNames(styles.mainContainer, {}, [])}>
        <ul className={classNames(styles.picker, {}, [])}>
          <li className={classNames(styles.pick, {}, [styles.pickActive])}>
            <p className={classNames(styles.text, {}, [styles.activeText])}>Личные данные</p>
          </li>
          <li className={classNames(styles.pick, {}, [])}>
            <p className={classNames(styles.text, {}, [])}>Контакты</p>
          </li>
          <li className={classNames(styles.pick, {}, [])}>
            <p className={classNames(styles.text, {}, [])}>Местоположение</p>
          </li>
          <li className={classNames(styles.pick, {}, [])}>
            <p className={classNames(styles.text, {}, [])}>Прочее</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
