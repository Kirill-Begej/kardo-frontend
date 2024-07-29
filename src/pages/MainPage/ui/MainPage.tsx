/*
  нужно доиспровлять, распределить по папка.
  + вынести в отдельные компоненты
  поправить чуть-чуть pixelPerfect.
*/

import { Slider } from 'shared/ui/Slider/ui/Slider';

import { PlayIcon } from 'shared/ui/PlayIcon/PlayIcon';
import { Header } from 'shared/ui/Header';
import { Section } from 'shared/ui/Section/Section';
import { Titles } from 'shared/ui/Titles/Title';
import imageWaiting from '../../../shared/assets/images/Card_waiting.jpg';
import imageCard from '../../../shared/assets/images/Card_m.jpeg';
import image from '../../../shared/assets/images/slide.jpg';
import styles from './MainPage.module.css';

const MainPage = () => {
  return (
    <section className={styles.main}>
      <article className={styles.container}>
        <Header />
        <main className={styles.content}>
          <button className={styles.button}>Подать заявку</button>
          <Slider />
          <Section pixelPerfect={false}>
            <Titles isLink={true} name='Новости' />
            <div className={styles.block}>
              <div className={styles.slide}></div>
              <div className={styles.slide}></div>
              <div className={styles.slide}></div>
              <div className={styles.slide}></div>
              <div className={styles.slide}></div>
            </div>
          </Section>
          <Section pixelPerfect={false}>
            <Titles isLink={true} name='Направления' />
            <div className={styles.block}>
              <div className={styles.direction}>
                <img className={styles.image} src={image} />
                <p className={styles.subittle}>Брейкинг</p>
              </div>
              <div className={styles.direction}>
                <img className={styles.image} src={image} />
                <p className={styles.subittle}>Воркаут</p>
              </div>
              <div className={styles.direction}>
                <img className={styles.image} src={image} />
                <p className={styles.subittle}>BMX</p>
              </div>
              <div className={styles.direction}>
                <img className={styles.image} src={image} />
                <p className={styles.subittle}>BMX</p>
              </div>
            </div>
          </Section>
          <Section pixelPerfect={true}>
          <Titles isLink={true} name='Участники' />
              <div className={styles.block}>
                <div className={styles.player}>
                  <div className={styles.video}>
                    <PlayIcon />
                  </div>
                  <p className={styles.subittle}>Дмитрий Пономаренко</p>
                </div>
                <div className={styles.player}>
                  <div className={styles.video}>
                    <PlayIcon />
                  </div>
                  <p className={styles.subittle}>Дмитрий Пономаренко</p>
                </div>
                <div className={styles.player}>
                  <div className={styles.video}>
                    <PlayIcon />
                  </div>
                  <p className={styles.subittle}>Дмитрий Пономаренко</p>
                </div>
              </div>
          </Section>
          <Section pixelPerfect={true}>
            <Titles isLink={false} name='Что вас ждет?' />
            <img className={styles.cardImage} src={imageWaiting} />
          </Section>
          <Section pixelPerfect={false}>
            <Titles isLink={true} name='Трансляции' />
            <div className={styles.block}>
                <div className={styles.player}>
                  <div className={styles.video}>
                    <PlayIcon />
                  </div>
                  <p className={styles.subittle}>Дмитрий Пономаренко</p>
                </div>
              </div>
          </Section>
          <Section pixelPerfect={true}>
          <Titles isLink={false} name='О наших экспертах' />
            <img className={styles.cardImage} src={imageCard} />
          </Section>
        </main>
      </article>
    </section>
  );
};

export default MainPage;
