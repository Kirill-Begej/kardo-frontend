import { Section } from 'shared/ui/Section/Section';
import { Titles } from 'shared/ui/Titles/Title';
import styles from './MainPage.module.css';
import image from '../../../shared/assets/images/slide.jpg';

export const DirectionBlock = () => {
  return (
    <Section pixelPerfect={false}>
            <Titles isLink={true} name='Направления' />
            <div className={styles.block}>
              <div className={styles.direction}>
                <img className={styles.image} src={image} />
                <p className={styles.subittle}>Брейкинг</p>
              </div>
              <div className={styles.direction}>
                <img className={styles.image} src={image} />
                <p className={styles.subittle}>Воркаут</p>
              </div>
              <div className={styles.direction}>
                <img className={styles.image} src={image} />
                <p className={styles.subittle}>BMX</p>
              </div>
              <div className={styles.direction}>
                <img className={styles.image} src={image} />
                <p className={styles.subittle}>BMX</p>
              </div>
            </div>
          </Section>
  );
};
