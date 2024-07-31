import styles from './CurrentNews.module.css';
import danceImage from '../../../shared/assets/images/dance.png';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface CurrentNewsBlockProps {
  className?: string;
}

export const CurrentNewsBlock: FC<CurrentNewsBlockProps> = ({ className }) => {
  return (
    <section className={classNames(styles.mainContent, {}, [className])}>
      <article className={classNames(styles.mainContainer, {}, [className])}>
        <h2 className={styles.heading}>Национальный этап: Коста-Рика</h2>
        <img className={styles.image} src={danceImage} />
        <div className={styles.info}>
          <p className={styles.mainText}>
            Сегодня, 23 июня, стартует национальный этап конкурс-премии «КАРДО» в Коста-Рике
            по{'\u00A0'}направлениям BMX и Breaking.
            Barahona{'\u00A0'}Brizio{'\u00A0'}Aldo Alejandro, амбассадор
            и организатор национального этапа КАРДО,
            уже{'\u00A0'}с{'\u00A0'}нетерпением ждёт встречи
            с{'\u00A0'}участниками{'\u00A0'}на площадке!
          </p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p className={styles.text}>Дата: 23 июня</p>
            </li>
            <li className={styles.item}>
              <p className={styles.text}>
                Место: скейт-парк де Хосе Мария, Зеледон, Курридабат, Коста-Рика
              </p>
            </li>
          </ul>
          <p className={styles.infoText}>
            Регистрация на событие в личном кабинете.
            С нетерпением ждем на гранд-финале
            в Ставрополе делегацию из Коста-Рики
          </p>
        </div>
      </article>
    </section>
  );
};
