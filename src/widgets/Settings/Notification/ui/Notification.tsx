import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import { FC } from 'react';
import styles from './Notification.module.css';

export const Notification: FC = () => {
  return (
    <section className={classNames(styles.notification, {}, [])}>
      <div className={classNames(styles.mainContainer, {}, [])}>
        <p className={styles.title}>Уведомление</p>
        <div className={classNames(styles.note, {}, [])}>
          <div className={classNames(styles.block, {}, [])}>
            <p className={classNames(styles.textLink, {}, [])}>Уведомление</p>
            <label className={classNames(styles.button, {}, [])}>
              <input
                className={classNames(styles.checkbox)}
                type='checkbox'
                placeholder='Чекбокс для уведомления'
              />
              <span className={styles.switch}></span>
            </label>
          </div>
          <div className={styles.line}></div>
          <Link to='/' className={classNames(styles.link, {}, [])}>
            <p className={classNames(styles.textLink)}>Настройки уведомлений</p>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
