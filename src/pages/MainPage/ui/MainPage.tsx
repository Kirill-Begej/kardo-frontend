import { Slider } from 'shared/ui/Slider/ui/Slider';

import { Header } from 'shared/ui/Header';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { BlockNews } from 'widgets/BlockNews';
import { BlockMembers } from 'widgets/BlockMembers';
import { BlockImage } from 'widgets/ImageBlock';
import { BlockTranslation } from 'widgets/BlockTranslation';
import { BlockDirection } from 'widgets/BlockDirection';
import styles from './MainPage.module.css';

interface MainPageProps {
  className?: string;
}

const MainPage: FC<MainPageProps> = ({ className }) => {
  return (
    <section className={classNames(styles.main, {}, [className])}>
      <div className={classNames(styles.container, {}, [])}>
        <Header />
        <main className={classNames(styles.content, {}, [])}>
          <button className={classNames(styles.button, {}, [])}>Подать заявку</button>
          <Slider />
          <BlockNews />
          <BlockDirection />
          <BlockMembers />
          <BlockImage isImage={true} name='Что вас ждет?' />
          <BlockTranslation />
          <BlockImage isImage={false} name='О наших экспертах' />
        </main>
      </div>
    </section>
  );
};

export default MainPage;
