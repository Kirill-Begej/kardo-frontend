import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import { FC } from 'react';
import cls from './Safe.module.css';

export const Safe: FC = () => {
  return (
    <section className={classNames(cls.notification, {}, [])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
      <p className={cls.title}>БЕЗОПАСНОТЬ</p>
        <div className={classNames(cls.note, {}, [])}>
          <Link to='/' className={classNames(cls.block, {}, [])}>
            <p className={cls.textLink}>Изменить пароль</p>
            <ArrowRight />
          </Link>
          <div className={classNames(cls.line, {}, [])}></div>
          <Link to='/' className={classNames(cls.block, {}, [])}>
            <p className={cls.textLink}>Активные сеансы</p>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
