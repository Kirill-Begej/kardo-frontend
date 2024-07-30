import styles from './Video.module.css';
import video from '../../../assets/video/video.mp4';

export const Video = () => {
  return (
    <div className={styles.video}>
      <video width='390' height='216' className={styles.videoBlock} controls>
        <source src={video} type='video/mp4'></source>
      </video>
    </div>
  );
};
