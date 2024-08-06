import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CloseLink.module.css';

interface CloseLinkProps extends LinkProps {
  className?: string;
  children: ReactNode | string;
}

export const CloseLink: FC<CloseLinkProps> = ({ to, className, children }) => {
  return (
    <Link to={to} className={classNames(cls.close, {}, [className])}>
      {children}
    </Link>
  );
};
