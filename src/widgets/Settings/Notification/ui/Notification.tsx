import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import { FC } from 'react';
import cls from './Notification.module.css';

export const Notification: FC = () => {
  return (
    <section className={classNames(cls.notification, {}, [])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <p className={cls.title}>Уведомление</p>
        <div className={classNames(cls.note, {}, [])}>
          <div className={classNames(cls.block, {}, [])}>
            <p className={classNames(cls.textLink, {}, [])}>Уведомление</p>
            <label className={classNames(cls.button, {}, [])}>
              <input
                className={classNames(cls.checkbox)}
                type='checkbox'
                placeholder='Чекбокс для уведомления'
              />
              <span className={cls.switch}></span>
            </label>
          </div>
          <div className={cls.line}></div>
          <Link to='/' className={classNames(cls.link, {}, [])}>
            <p className={classNames(cls.textLink)}>Настройки уведомлений</p>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
