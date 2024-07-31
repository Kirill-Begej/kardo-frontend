import { Section } from 'shared/ui/Section/Section';
import { Titles } from 'shared/ui/Titles/Title';
import styles from './MainPage.module.css';
import image from '../../../shared/assets/images/slide.jpg';
import { BlockSlider } from 'shared/ui/BlockSlider';

export const DirectionBlock = () => {
  return (
    <Section pixelPerfect={false}>
      <Titles link='/direction' isLink={true} name='Направления' />
      <BlockSlider>
        <div className={styles.direction}>
          <img className={styles.image} src={image} />
          <p className={styles.subittle}>Брейкинг</p>
        </div>
        <div className={styles.direction}>
          <img className={styles.image} src={image} />
          <p className={styles.subittle}>Брейкинг</p>
        </div>
        <div className={styles.direction}>
          <img className={styles.image} src={image} />
          <p className={styles.subittle}>Брейкинг</p>
        </div>
        <div className={styles.direction}>
          <img className={styles.image} src={image} />
          <p className={styles.subittle}>Брейкинг</p>
        </div>
        <div className={styles.direction}>
          <img className={styles.image} src={image} />
          <p className={styles.subittle}>Брейкинг</p>
        </div>
      </BlockSlider>
    </Section>
  );
};
