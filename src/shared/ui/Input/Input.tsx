import { ChangeEvent, FC, forwardRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import HideIcon from 'shared/assets/images/icons/hide_icon.svg';
import ShowIcon from 'shared/assets/images/icons//show_icon.svg';
import cls from './Input.module.css';

interface InputProps {
  className?: string;
  type: 'text' | 'password' | 'email';
  placeholder: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  error: boolean;
  errorText: string;
  ref?: any,
  onIconClick?: () => void;
  icon?: string;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  placeholder,
  onChange,
  value,
  name,
  error,
  errorText,
  onIconClick,
  icon,
}, ref) => {
  return (
    <label className={classNames(cls.label, {}, [className])}>
      <input
        className={classNames(cls.input, { [cls.errorInput]: error }, [])}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        ref={ref}
      />
      {error && <span className={classNames(cls.errorText, {}, [])}>{errorText}</span>}
      {name === 'password' && value && icon === 'HideIcon' && <HideIcon className={classNames(cls.icon, {}, [])} onClick={onIconClick} />}
      {name === 'password' && value && icon === 'ShowIcon' && <ShowIcon className={classNames(cls.icon, {}, [])} onClick={onIconClick} />}
    </label>
  );
});
