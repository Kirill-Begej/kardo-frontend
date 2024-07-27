import { FC } from 'react';
import styles from './Input.module.css';

interface InputProps {
  placeholder?: string;
}
export const Input: FC<InputProps> = ({ placeholder }) => {
  return (
    <input className={styles.input} placeholder={placeholder} />
  );
};
