import { FC } from 'react';
import styles from './VideoPlayer.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface VideoPlayerInfoProps {
  className?: string;
}
export const VideoPlayerInfo: FC<VideoPlayerInfoProps> = ({ className }) => {
  return (
    <section className={classNames(styles.member, {}, [className])}>
      <article className={classNames(styles.mainContainer, {}, [])}>
        <div className={classNames(styles.avatar, {}, [])}></div>
        <div className={classNames(styles.info, {}, [])}>
          <h2 className={classNames(styles.name, {}, [])}>Владимир Пономарев</h2>
          <p className={classNames(styles.contest, {}, [])}>Видеоконкурс КАРДО [7]</p>
        </div>
      </article>
    </section>
  )
}