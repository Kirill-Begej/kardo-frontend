import { Titles } from 'shared/ui/Titles/Title';
import { BlockSlider } from 'shared/ui/BlockSlider';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './BlockNews.module.css';

interface BlockNewsProps {
  className?: string
}

export const BlockNews: FC<BlockNewsProps> = ({ className }) => {
  return (
    <section className={classNames(styles.section, {}, [className])}>
      <article className={classNames(styles.mainContainer, {}, [])}>
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
        </article>
    </section>
  );
};
