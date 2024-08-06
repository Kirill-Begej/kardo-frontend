import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import { FC } from 'react';
import cls from './FeedBack.module.css';

export const FeedBack: FC = () => {
  return (
    <section className={classNames(cls.section, {}, [])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <Link to='/' className={classNames(cls.link, {}, [])}>
          <p className={cls.textLink}>Обратная связь</p>
          <ArrowRight className={classNames(cls.arrow, {}, [])} />
        </Link>
      </div>
    </section>
  );
};
