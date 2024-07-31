import { Video } from 'shared/ui/Video';
import styles from './VideoPlayer.module.css';
import { VideoPlayerSlider } from './VIdeoPlayerSlider';
import { VideoPlayerInfo } from './VideoPlayerInfo';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface VideoPlayerContentProps {
  className?: string;
}

export const VideoPlayerContent: FC<VideoPlayerContentProps> = ({ className }) => {
  return (
    <main className={classNames(styles.content, {}, [className])}>
      <section className={classNames(styles.videoBlock, {}, [])}>
        <article className={classNames(styles.MainContainer, {}, [])}>
          <Video />
        </article>
      </section>
      <VideoPlayerInfo />
      <VideoPlayerSlider />
      <VideoPlayerSlider />
      </main>
  );
};
