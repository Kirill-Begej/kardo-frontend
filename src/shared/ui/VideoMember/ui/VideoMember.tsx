import styles from './VideoMember.module.css';
import PlayVideo from 'shared/assets/images/icons/playVideo.svg';

export const VideoMember = () => {
  return (
    <div className={styles.video}>
      <div className={styles.player}>
        <div className={styles.arround}>
          <PlayVideo className={styles.icon} />
        </div>
      </div>
      <p className={styles.name}>Владимир Пономаренко</p>
    </div>
  )
}