import { Section } from 'shared/ui/Section/Section';
import { Titles } from 'shared/ui/Titles/Title';
import styles from './MainPage.module.css';

export const NewsBlock = () => {
  return (
    <Section pixelPerfect={false}>
      <Titles isLink={true} name='Новости' />
        <div className={styles.block}>
          <div className={styles.slide}></div>
          <div className={styles.slide}></div>
          <div className={styles.slide}></div>
          <div className={styles.slide}></div>
          <div className={styles.slide}></div>
        </div>
    </Section>
  );
};
