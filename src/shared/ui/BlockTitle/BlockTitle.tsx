import { classNames } from 'shared/lib/classNames/classNames';
import cls from './BlockTitle.module.css';

interface BlockTitleProps {
  className?: string;
  title: string;
  subtitle?: string;
}

export const BlockTitle = ({ className, title, subtitle }: BlockTitleProps) => {
  return (
    <h2 className={classNames(cls.blockTitle, {}, [className])}>
      <span className={classNames(cls.title, {}, [])}>{title}</span>
      {subtitle && <span className={classNames(cls.subtitle, {}, [])}>{subtitle}</span>}
    </h2>
  );
};
