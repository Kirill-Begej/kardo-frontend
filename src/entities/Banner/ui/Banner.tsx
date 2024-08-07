import { classNames } from 'shared/lib/classNames/classNames';
import { Date } from 'shared/ui/Date/Date';
import cls from './Banner.module.css';

interface BannerProps {
  className?: string;
}

export const Banner = ({ className }: BannerProps) => {
  return (
    <section className={classNames(cls.banner, {}, [className])}>
      <div className={classNames(cls.container, {}, [])}>
        <h3 className={classNames(cls.text, {}, [])}>До гранд-финала КАРДО [7]:</h3>
        <div className={classNames(cls.date, {}, [])}>
          <Date className={classNames(cls.days, {}, [])} type='black' value={44} text='Дня'/>
          <div className={classNames(cls.time, {}, [])}>
            <Date className={classNames(cls.hours, {}, [])} type='white' value={'04'} text='Часа'/>
            <span className={classNames(cls.separator, {}, [])}>:</span>
            <Date className={classNames(cls.minutes, {}, [])} type='white' value={33} text='Минут'/>
            <span className={classNames(cls.separator, {}, [])}>:</span>
            <Date className={classNames(cls.seconds, {}, [])} type='white' value={57} text='Секунд'/>
          </div>
        </div>
      </div>
    </section>
  );
};
