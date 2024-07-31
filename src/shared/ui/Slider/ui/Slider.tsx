import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Slider.module.css';

interface SliderProps {
  className?: string;
}

export const Slider: FC<SliderProps> = ({ className }) => {
  return (
    <section className={classNames(styles.slider, {}, [className])}>
      <div className={classNames(styles.block, {}, [])}>
        <div className={classNames(styles.slide, {}, [])}></div>
        <div className={classNames(styles.slide, {}, [])}></div>
        <div className={classNames(styles.slide, {}, [])}></div>
        <div className={classNames(styles.slide, {}, [])}></div>
        <div className={classNames(styles.slide, {}, [])}></div>
      </div>
      <div className={classNames(styles.points, {}, [])}>
        <div className={classNames(styles.point, {}, [])}></div>
        <div className={classNames(styles.point, {}, [])}></div>
        <div className={classNames(styles.point, {}, [])}></div>
        <div className={classNames(styles.point, {}, [])}></div>
        <div className={classNames(styles.point, {}, [])}></div>
      </div>
    </section>
  );
};
