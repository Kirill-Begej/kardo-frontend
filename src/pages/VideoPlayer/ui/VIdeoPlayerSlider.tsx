import { FC } from 'react';
import styles from './VideoPlayer.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface VideoPlayerSliderProps {
  className?: string;
}

export const VideoPlayerSlider: FC<VideoPlayerSliderProps> = ({ className }) => {
  return (
    <section className={classNames(styles.players, {}, [className])}>
      <article className={classNames(styles.videoContainer, {}, [])}>
        <h2 className={classNames(styles.heading, {}, [])}>Победители Видеоконкурса КАРДО [6]</h2>
        <div className={classNames(styles.block, {}, [])}>
          <div className={classNames(styles.slide, {}, [])}>
            <div className={classNames(styles.image, {}, [])}></div>
            <p className={classNames(styles.subitle, {}, [])}>Александр Захаров</p>
          </div>
          <div className={classNames(styles.slide, {}, [])}>
            <div className={classNames(styles.image, {}, [])}></div>
            <p className={classNames(styles.subitle, {}, [])}>Александр Захаров</p>
          </div>
          <div className={classNames(styles.slide, {}, [])}>
            <div className={classNames(styles.image, {}, [])}></div>
            <p className={classNames(styles.subitle, {}, [])}>Александр Захаров</p>
          </div>
        </div>
      </article>
    </section>
  )
}