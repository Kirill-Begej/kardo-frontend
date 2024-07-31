import { FC, ReactNode } from 'react';
import styles from './BlockSlider.module.css';

interface BlockSliderProps {
  children: ReactNode;
}
export const BlockSlider: FC<BlockSliderProps> = ({ children }) => {
  return (
    <div className={styles.block}>
      {children}
    </div>
  )
}