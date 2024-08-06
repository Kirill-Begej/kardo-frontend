import { Link } from 'react-router-dom';
import Calendar from 'shared/assets/images/icons/Calendar.svg';
import Note from 'shared/assets/images/icons/Note.svg';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileView.module.css';

export const ProfileView = () => {
  return (
    <section className={classNames(cls.view, {}, [])}>
      <div className={classNames(cls.container, {}, [])}>
        <Link to='/' className={classNames(cls.link, {}, [])}>
          <Note className={classNames(cls.svg, {}, [])} />
          <div className={classNames(cls.names, {}, [])}>
            <p className={classNames(cls.linkText, {}, [])}>Мои заявки</p>
            <ArrowRight className={classNames(cls.arrow, {}, [])} />
          </div>
        </Link>
        <div className={classNames(cls.line, {}, [])}></div>
        <Link to='/' className={classNames(cls.link, {}, [])}>
          <Calendar className={classNames(cls.svg, {}, [])} />
          <div className={classNames(cls.names, {}, [cls.calendar])}>
            <p className={classNames(cls.linkText, {}, [])}>Календарь</p>
            <ArrowRight className={classNames(cls.arrow, {}, [])} />
          </div>
        </Link>
      </div>
    </section>
  );
};
