import { FC } from 'react';
import styles from './ButtonAuth.module.css';

interface ButtonProps {
  name?: string;
}

export const ButtonAuth: FC<ButtonProps> = ({ name }) => {
  return (
    <button className={styles.button}>{name}</button>
  );
};
