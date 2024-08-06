import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import { FC } from 'react';
import cls from './Confidentiality.module.css';

export const Confidentiality: FC = () => {
  return (
    <section className={classNames(cls.section, {}, [])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <p className={cls.title}>КОНФИДЕНЦИАЛЬНОСТЬ</p>
        <div className={classNames(cls.note, {}, [])}>
          <Link to='/' className={classNames(cls.block, {}, [])}>
            <p className={cls.textLink}>Профиль</p>
            <ArrowRight />
          </Link>
          <div className={classNames(cls.line, {}, [])}></div>
          <Link to='/' className={classNames(cls.block, {}, [])}>
            <p className={cls.textLink}>Политика конфиденциальности</p>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};
