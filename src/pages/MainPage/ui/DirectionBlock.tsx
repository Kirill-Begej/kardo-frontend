import { Titles } from 'shared/ui/Titles/Title';
import { BlockSlider } from 'shared/ui/BlockSlider';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './MainPage.module.css';
import image from '../../../shared/assets/images/slide.jpg';

interface DirectionBlockProps {
  className?: string;
}

export const DirectionBlock: FC<DirectionBlockProps> = ({ className }) => {
  return (
    <section className={classNames(styles.section, {}, [className])}>
      <article className={classNames(styles.mainContainer, {}, [])}>
      <Titles link='/direction' isLink={true} name='Направления' />
      <BlockSlider>
        <div className={classNames(styles.direction, {}, [className])}>
          <img className={classNames(styles.image, {}, [])} src={image} />
          <p className={classNames(styles.subtitle, {}, [])}>Брейкинг</p>
        </div>
        <div className={classNames(styles.direction, {}, [className])}>
          <img className={classNames(styles.image, {}, [])} src={image} />
          <p className={classNames(styles.subtitle, {}, [])}>Брейкинг</p>
        </div>
        <div className={classNames(styles.direction, {}, [className])}>
          <img className={classNames(styles.image, {}, [])} src={image} />
          <p className={classNames(styles.subtitle, {}, [])}>Брейкинг</p>
        </div>
        <div className={classNames(styles.direction, {}, [className])}>
          <img className={classNames(styles.image, {}, [])} src={image} />
          <p className={classNames(styles.subtitle, {}, [])}>Брейкинг</p>
        </div>
        <div className={classNames(styles.direction, {}, [className])}>
          <img className={classNames(styles.image, {}, [])} src={image} />
          <p className={classNames(styles.subtitle, {}, [])}>Брейкинг</p>
        </div>
      </BlockSlider>
      </article>
    </section>
  );
};
