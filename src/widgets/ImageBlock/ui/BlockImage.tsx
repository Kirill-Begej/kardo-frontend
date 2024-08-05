import { Titles } from 'shared/ui/Titles/Title';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import imageWaiting from 'shared/assets/images/Card_waiting.jpg';
import imageCard from 'shared/assets/images/Card_m.jpeg';
import styles from './BlockImage.module.css';

interface ImageBlockProps {
  isImage: boolean;
  name: string;
  className?: string;
}

export const BlockImage: FC<ImageBlockProps> = ({ isImage, name, className }) => {
  return (
    <section className={classNames(styles.section, {}, [className])}>
      <article className={classNames(styles.mainContainer, {}, [])}>
      <Titles link='/' isLink={false} name={name} />
      <img
        className={classNames(styles.cardImage, {}, [])}
        src={isImage ? imageWaiting : imageCard} />
      </article>
    </section>
  );
};
