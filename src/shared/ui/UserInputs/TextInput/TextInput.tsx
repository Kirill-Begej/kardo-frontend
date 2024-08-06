import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TextInput.module.css';

interface TextInputProps {
  name?: string;
  className?: string;
  placeholder?: string;
  nameText?: string;
  type?: string;
}

export const TextInput: FC<TextInputProps> = ({
  className, name, placeholder, nameText, type,
}) => {
  return (
    <label className={classNames(cls.block, {}, [className])}>
      <p className={classNames(cls.text)}>{nameText}</p>
      <input
        className={classNames(cls.input, {}, [])}
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </label>
  );
};
