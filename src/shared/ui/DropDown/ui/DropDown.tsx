import ArrowClose from 'shared/assets/images/icons/arrow_dropdown_close.svg';
import styles from './DropDown.module.css';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface DropDownProps {
  className?: string;
}

export const DropDown: FC<DropDownProps> = ({ className }) => {
  return (
    <div className={classNames(styles.dropDown, {}, [className])}>
      <div className={classNames(styles.select, {}, [])}>
        <span className={classNames(styles.value, {}, [])}>Программа</span>
        <ArrowClose className={classNames(styles.arrow, {}, [])} />
      </div>
    </div>
  );
};
