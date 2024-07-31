import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Icon from '../../assets/images/icons/play.svg';
import styles from './PlayIcon.module.css';

interface PlayIconProps {
  className?: string;
}
export const PlayIcon: FC<PlayIconProps> = ({ className }) => {
  return (
    <div className={classNames(styles.icon, {}, [className])}>
      <Icon className={classNames(styles.play, {}, [])} />
    </div>
  );
};
