import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Date.module.css';

interface DateProps {
  className?: string;
  type: 'black' | 'white';
  value: number | string;
  text: string;
}

export const Date = ({
  className,
  type,
  value,
  text,
}: DateProps) => {
  return (
    <div className={classNames(cls.date, {
      [cls.black]: type === 'black',
      [cls.white]: type === 'white',
    }, [className])}>
      <span className={classNames(cls.value, {}, [])}>{value}</span>
      <span className={classNames(cls.text, {}, [])}>{text}</span>
    </div>
  );
};
