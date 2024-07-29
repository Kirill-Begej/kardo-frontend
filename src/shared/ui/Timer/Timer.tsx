import styles from './Timer.module.css';

export const Timer = () => {
  return (
    <div className={styles.timer}>
      <div className={styles.days}>
        <p className={styles.number}>44</p>
        <p className={styles.textDay}>Дня</p>
      </div>
      <div className={styles.time}>
        <p className={styles.number}>04:</p>
        <p className={styles.text}>Часа</p>
        <p className={styles.number}>33:</p>
        <p className={styles.text}>Минут</p>
        <p className={styles.number}>57</p>
        <p className={styles.text}>Секунд</p>
      </div>
    </div>
  );
};
