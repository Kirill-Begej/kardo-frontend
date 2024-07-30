import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import CloseIcon from 'shared/assets/images/icons/close_icon.svg';
import cls from './CloseLink.module.css';

interface CloseLinkProps extends LinkProps {
  className?: string;
}

export const CloseLink: FC<CloseLinkProps> = ({ to, className }) => {
  return (
    <Link to={to} className={classNames(cls.close, {}, [className])}>
      <CloseIcon className={classNames(cls.closeIcon, {}, [])} />
    </Link>
  );
};
