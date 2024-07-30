import { FC } from 'react';
import styles from './DropDown.module.css';
import ArrowClose from 'shared/assets/images/icons/arrow_dropdown_close.svg';


interface DropDownProps {
  isOpen?: boolean;
  onOpen?: () => void;
  name?: string;
}
export const DropDown: FC<DropDownProps> = ({ isOpen, onOpen, name }) => {
  return (
    <div className={styles.dropDown}>
      <div className={styles.select} onClick={onOpen}>
        <span className={styles.value}>{name}</span>
        <ArrowClose className={styles.arrow} />
      </div>
      <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <li className={styles.item}>Программа</li>
        <li className={styles.item}>Участник</li>
        <li className={styles.item}>Команда</li>
        <li className={styles.item}>Досуговая программа</li>
        <li className={styles.item}>Грантовый конкурс</li>
        <li className={styles.item}>Культурная программа</li>
      </ul>
    </div>
  )
}