import Icon from '../../assets/images/icons/play.svg';
import styles from './PlayIcon.module.css';

export const PlayIcon = () => {
  return (
    <div className={styles.icon}>
      <Icon className={styles.play} />
    </div>
  );
};
