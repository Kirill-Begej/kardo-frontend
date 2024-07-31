/*
  нужно доиспровлять, распределить по папка.
  + вынести в отдельные компоненты
  поправить чуть-чуть pixelPerfect.
*/

import { Slider } from 'shared/ui/Slider/ui/Slider';

import { Header } from 'shared/ui/Header';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './MainPage.module.css';
import { NewsBlock } from './NewsBlock';
import { DirectionBlock } from './DirectionBlock';
import { MembersBlock } from './MembersBlock';
import { ImageBlock } from './ImageBlock';
import { BroadCast } from './BroadCast';

interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = ({ className }) => {
  return (
    <section className={classNames(styles.main, {}, [className])}>
      <article className={classNames(styles.container, {}, [])}>
        <Header />
        <main className={classNames(styles.content, {}, [])}>
          <button className={classNames(styles.button, {}, [])}>Подать заявку</button>
          <Slider />
          <NewsBlock />
          <DirectionBlock />
          <MembersBlock />
          <ImageBlock isImage={true} name='Что вас ждет?' />
          <BroadCast />
          <ImageBlock isImage={false} name='О наших экспертах' />
        </main>
      </article>
    </section>
  );
};

export default MainPage;
