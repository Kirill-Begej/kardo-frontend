import PlayVideo from 'shared/assets/images/icons/playVideo.svg';
import styles from './VideoMember.module.css';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';

interface VideoMemberProps {
  className?: string;
  to?: string;
}
export const VideoMember: FC<VideoMemberProps> = ({ className, to }) => {
  return (
    <div className={classNames(styles.video, {}, [className])}>
      <Link to={to} className={classNames(styles.player, {}, [])}>
        <div className={classNames(styles.arround, {}, [])}>
          <PlayVideo className={classNames(styles.icon, {}, [])} />
        </div>
      </Link>
      <p className={classNames(styles.name, {}, [])}>Владимир Пономаренко</p>
    </div>
  );
};
