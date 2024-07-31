import { Section } from 'shared/ui/Section/Section';
import { Titles } from 'shared/ui/Titles/Title';
import { BlockSlider } from 'shared/ui/BlockSlider';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './MainPage.module.css';

interface NewsBlockProps {
  className?: string
}

export const NewsBlock: FC<NewsBlockProps> = ({ className }) => {
  return (
    <Section pixelPerfect={false}>
      <Titles link='/news' isLink={true} name='Новости' />
        <BlockSlider>
          <div className={classNames(styles.slide, {}, [className])}>
            <div className={classNames(styles.textSubtitle, {}, [])}>
              <p className={classNames(styles.name, {}, [])}>
                Региональный этап: Кировская область
              </p>
            </div>
            <div className={classNames(styles.date, {}, [])}>
              <p className={classNames(styles.day, {}, [])}>10 июля</p>
            </div>
          </div>
          <div className={classNames(styles.slide, {}, [className])}>
            <div className={classNames(styles.textSubtitle, {}, [])}>
              <p className={classNames(styles.name, {}, [])}>
                Региональный этап: Кировская область
              </p>
            </div>
            <div className={classNames(styles.date, {}, [])}>
              <p className={classNames(styles.day, {}, [])}>10 июля</p>
            </div>
          </div>
          <div className={classNames(styles.slide, {}, [className])}>
            <div className={classNames(styles.textSubtitle, {}, [])}>
              <p className={classNames(styles.name, {}, [])}>
                Региональный этап: Кировская область
              </p>
            </div>
            <div className={classNames(styles.date, {}, [])}>
              <p className={classNames(styles.day, {}, [])}>10 июля</p>
            </div>
          </div>
          <div className={classNames(styles.slide, {}, [className])}>
            <div className={classNames(styles.textSubtitle, {}, [])}>
              <p className={classNames(styles.name, {}, [])}>
                Региональный этап: Кировская область
              </p>
            </div>
            <div className={classNames(styles.date, {}, [])}>
              <p className={classNames(styles.day, {}, [])}>10 июля</p>
            </div>
          </div>
        </BlockSlider>
    </Section>
  );
};
