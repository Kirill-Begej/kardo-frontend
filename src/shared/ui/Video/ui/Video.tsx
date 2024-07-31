import styles from './Video.module.css';
import video from '../../../assets/video/video.mp4';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface VideoProps {
  className?: string;
}

export const Video: FC<VideoProps> = ({ className }) => {
  return (
    <div className={classNames(styles.video, {}, [className])}>
      <video className={classNames(styles.videoBlock, {}, [])} controls>
        <source src={video} type='video/mp4'></source>
      </video>
    </div>
  );
};
