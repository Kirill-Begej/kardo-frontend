import { FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './BlockSlider.module.css';

interface BlockSliderProps {
  children: ReactNode;
  className?: string;
}
export const BlockSlider: FC<BlockSliderProps> = ({ children, className }) => {
  return (
    <div className={classNames(styles.block, {}, [className])}>
      {children}
    </div>
  );
};
