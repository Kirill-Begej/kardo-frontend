import { FC } from 'react';
import styles from './Slider.module.css';

export const Slider: FC = () => {
  return (
    <section className={styles.slider}>
      <div className={styles.block}>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
        <div className={styles.slide}></div>
      </div>
      <div className={styles.points}>
        <div className={styles.point}></div>
        <div className={styles.point}></div>
        <div className={styles.point}></div>
        <div className={styles.point}></div>
        <div className={styles.point}></div>
      </div>
    </section>
  );
};
