import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './TextInput.module.css';

interface TextInputProps {
  name?: string;
  className?: string;
  placeholder?: string;
  nameText?: string;
}

export const TextInput: FC<TextInputProps> = ({
  className, name, placeholder, nameText,
}) => {
  return (
    <label className={classNames(styles.block, {}, [className])}>
      <p className={classNames(styles.text)}>{nameText}</p>
      <input
        className={classNames(styles.input, {}, [])}
        placeholder={placeholder}
        type='text'
        name={name}
      />
    </label>
  );
};
