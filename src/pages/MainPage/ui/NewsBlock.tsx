import { Section } from 'shared/ui/Section/Section';
import { Titles } from 'shared/ui/Titles/Title';
import styles from './MainPage.module.css';
import { BlockSlider } from 'shared/ui/BlockSlider';

export const NewsBlock = () => {
  return (
    <Section pixelPerfect={false}>
      <Titles link='/news' isLink={true} name='Новости' />
        <BlockSlider>
          <div className={styles.slide}>
            <div className={styles.textSubtitle}>
              <p className={styles.name}>Региональный этап: Кировская область</p>
            </div>
            <div className={styles.date}>
              <p className={styles.day}>10 июля</p>
            </div>
          </div>
          <div className={styles.slide}>
            <div className={styles.textSubtitle}>
              <p className={styles.name}>Региональный этап: Кировская область</p>
            </div>
            <div className={styles.date}>
              <p className={styles.day}>10 июля</p>
            </div>
          </div>
          <div className={styles.slide}>
            <div className={styles.textSubtitle}>
              <p className={styles.name}>Региональный этап: Кировская область</p>
            </div>
            <div className={styles.date}>
              <p className={styles.day}>10 июля</p>
            </div>
          </div>
          <div className={styles.slide}>
            <div className={styles.textSubtitle}>
              <p className={styles.name}>Региональный этап: Кировская область</p>
            </div>
            <div className={styles.date}>
              <p className={styles.day}>10 июля</p>
            </div>
          </div>
          <div className={styles.slide}>
            <div className={styles.textSubtitle}>
              <p className={styles.name}>Региональный этап: Кировская область</p>
            </div>
            <div className={styles.date}>
              <p className={styles.day}>10 июля</p>
            </div>
          </div>
        </BlockSlider>
    </Section>
  );
};
