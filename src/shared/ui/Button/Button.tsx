import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.css';

interface ButtonProps {
  className?: string;
  children: string;
  type: 'button' | 'reset' | 'submit';
  active?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  type,
  active,
}) => {
  return (
    <button
      className={classNames(cls.button, { [cls.active]: active }, [className])}
      type={type}
    >{children}</button>
  );
};
