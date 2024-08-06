import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import { FC } from 'react';
import cls from './Support.module.css';

export const Support: FC = () => {
  return (
    <section className={classNames(cls.section, {}, [])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <Link to='/' className={classNames(cls.link, {}, [])}>
          <p className={cls.textLink}>Поддержка</p>
          <ArrowRight className={classNames(cls.arrow, {}, [])} />
        </Link>
      </div>
    </section>
  );
};
