import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.css';

interface ButtonProps {
  className?: string;
  children: string;
  type: 'button' | 'reset' | 'submit';
  noActive?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  type,
  noActive,
}) => {
  return (
    <button
      className={classNames(cls.button, { [cls.noActive]: noActive }, [className])}
      type={type}
    >{children}</button>
  );
};
