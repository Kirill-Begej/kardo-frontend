import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Timer.module.css';

interface TimerProps {
  className?: string;
}

export const Timer: FC<TimerProps> = ({ className }) => {
  return (
    <div className={classNames(styles.timer, {}, [className])}>
      <div className={classNames(styles.days, {}, [])}>
        <p className={classNames(styles.number, {}, [])}>44</p>
        <p className={classNames(styles.textDay, {}, [])}>Дня</p>
      </div>
      <div className={classNames(styles.time, {}, [className])}>
        <p className={classNames(styles.number, {}, [])}>04:</p>
        <p className={classNames(styles.text, {}, [])}>Часа</p>
        <p className={classNames(styles.number, {}, [])}>33:</p>
        <p className={classNames(styles.text, {}, [])}>Минут</p>
        <p className={classNames(styles.number, {}, [])}>57</p>
        <p className={classNames(styles.text, {}, [])}>Секунд</p>
      </div>
    </div>
  );
};
