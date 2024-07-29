import { FC } from 'react';
import styles from './ButtonAuth.module.css';

interface ButtonProps {
  name?: string;
  isValid: boolean;
}

export const ButtonAuth: FC<ButtonProps> = ({ name, isValid }) => {
  return (
    <button disabled={!isValid} className={`${styles.button} ${!isValid ? styles.buttonError : ''}`}>{name}</button>
  );
};
