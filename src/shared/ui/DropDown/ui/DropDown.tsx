import styles from './DropDown.module.css';

export const DropDown = () => {
  return (
    <div className={styles.dropDown}>
      <div className={styles.select}>
        <span className={styles.value}>Программа</span>
        <div className={styles.arrow}></div>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>Программа</li>
        <li className={styles.item}>Участник</li>
        <li className={styles.item}>Команда</li>
      </ul>
    </div>
  )
}