import { Section } from 'shared/ui/Section/Section';
import { Titles } from 'shared/ui/Titles/Title';
import { FC } from 'react';
import styles from './MainPage.module.css';
import imageWaiting from '../../../shared/assets/images/Card_waiting.jpg';
import imageCard from '../../../shared/assets/images/Card_m.jpeg';

interface ImageBlockProps {
  isImage: boolean;
  name: string;
}

export const ImageBlock: FC<ImageBlockProps> = ({ isImage, name }) => {
  return (
    <Section pixelPerfect={true}>
            <Titles isLink={false} name={name} />
            <img className={styles.cardImage} src={isImage ? imageWaiting : imageCard} />
          </Section>
  );
};
