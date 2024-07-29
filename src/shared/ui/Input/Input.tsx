import { ChangeEvent, FC } from 'react';
import EyeIcon from 'shared/assets/images/icons/icon_eye.svg';
import styles from './Input.module.css';

interface InputProps {
  name?: string;
  id?: string;
  value: string;
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'password' | 'email';
  isPassword: boolean;
}
export const Input: FC<InputProps> = ({
  placeholder, type, isPassword, name, id, onChange, value,
}) => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        required />
      {isPassword ? <EyeIcon className={styles.icon} /> : null}
    </label>
  );
};
