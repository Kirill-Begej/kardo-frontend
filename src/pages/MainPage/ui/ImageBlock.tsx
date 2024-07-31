import { Section } from 'shared/ui/Section/Section';
import { Titles } from 'shared/ui/Titles/Title';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './MainPage.module.css';
import imageWaiting from '../../../shared/assets/images/Card_waiting.jpg';
import imageCard from '../../../shared/assets/images/Card_m.jpeg';

interface ImageBlockProps {
  isImage: boolean;
  name: string;
  className?: string;
}

export const ImageBlock: FC<ImageBlockProps> = ({ isImage, name, className }) => {
  return (
    <Section pixelPerfect={true}>
      <Titles link='/' isLink={false} name={name} />
      <img
        className={classNames(styles.cardImage, {}, [className])}
        src={isImage ? imageWaiting : imageCard} />
    </Section>
  );
};
