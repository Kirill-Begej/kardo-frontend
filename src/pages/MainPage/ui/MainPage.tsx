/*
  нужно доиспровлять, распределить по папка.
  + вынести в отдельные компоненты
  поправить чуть-чуть pixelPerfect.
*/

import { Slider } from 'shared/ui/Slider/ui/Slider';

import { Header } from 'shared/ui/Header';
import styles from './MainPage.module.css';
import { NewsBlock } from './NewsBlock';
import { DirectionBlock } from './DirectionBlock';
import { MembersBlock } from './MembersBlock';
import { ImageBlock } from './ImageBlock';
import { BroadCast } from './BroadCast';

const MainPage = () => {
  return (
    <section className={styles.main}>
      <article className={styles.container}>
        <Header />
        <main className={styles.content}>
          <button className={styles.button}>Подать заявку</button>
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
