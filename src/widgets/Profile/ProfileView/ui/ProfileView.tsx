import { Link } from 'react-router-dom';
import Calendar from 'shared/assets/images/icons/Calendar.svg';
import Note from 'shared/assets/images/icons/Note.svg';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ProfileView.module.css';

export const ProfileView = () => {
  return (
    <section className={classNames(styles.view, {}, [])}>
      <div className={classNames(styles.container, {}, [])}>
        <Link to='/' className={classNames(styles.link, {}, [])}>
          <Note className={classNames(styles.svg, {}, [])} />
          <div className={classNames(styles.names, {}, [])}>
            <p className={classNames(styles.linkText, {}, [])}>Мои заявки</p>
            <ArrowRight className={classNames(styles.arrow, {}, [])} />
          </div>
        </Link>
        <Link to='/' className={classNames(styles.link, {}, [])}>
          <Calendar className={classNames(styles.svg, {}, [])} />
          <div className={classNames(styles.names, {}, [styles.calendar])}>
            <p className={classNames(styles.linkText, {}, [])}>Календарь</p>
            <ArrowRight className={classNames(styles.arrow, {}, [])} />
          </div>
        </Link>
      </div>
    </section>
  );
};
