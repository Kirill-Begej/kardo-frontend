import { HeaderMain } from 'shared/ui/HeaderMain';
import styles from './VideoPlayer.module.css';
import { VideoPlayerContent } from './VideoPlayerContent';

export const VideoPlayer = () => {
  return (
    <div className={styles.video}>
      <section className={styles.container}>
        <HeaderMain to='/members' name='Участник' />
        <VideoPlayerContent />
      </section>
    </div>
  );
};
