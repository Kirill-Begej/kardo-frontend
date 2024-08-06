import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import { FC } from 'react';
import cls from './General.module.css';

export const General: FC = () => {
  return (
    <section className={classNames(cls.section, {}, [])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <p className={cls.title}>Общие</p>
        <Link to='/' className={classNames(cls.link, {}, [])}>
          <p className={cls.textLink}>Аккаунт</p>
          <ArrowRight className={classNames(cls.arrow, {}, [])} />
        </Link>
      </div>
    </section>
  );
};
