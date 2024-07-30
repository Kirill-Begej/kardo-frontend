import { Header } from 'shared/ui/Header';
import styles from './VideoPlayer.module.css';
import { VideoPlayerContent } from './VideoPlayerContent';

export const VideoPlayer = () => {
  return (
    <div className={styles.video}>
      <section className={styles.container}>
        <Header name='Участник' />
        <VideoPlayerContent />
      </section>
    </div>
  );
};
