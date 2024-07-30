import { Video } from 'shared/ui/Video';
import styles from './VideoPlayer.module.css';

export const VideoPlayerContent = () => {
  return (
        <main className={styles.content}>
          <section className={styles.videoBlock}>
            <Video />
          </section>
          <section className={styles.member}>
            <div className={styles.avatar}></div>
            <div className={styles.info}>
              <h2 className={styles.name}>Владимир Пономарев</h2>
              <p className={styles.contest}>Видеоконкурс КАРДО [7]</p>
            </div>
          </section>
          <section className={styles.players}>
            <h2 className={styles.heading}>Победители Видеоконкурса КАРДО [6]</h2>
            <div className={styles.block}>
            <div className={styles.slide}>
                <div className={styles.image}></div>
                <p className={styles.subitle}>Александр Захаров</p>
              </div>
              <div className={styles.slide}>
                <div className={styles.image}></div>
                <p className={styles.subitle}>Александр Захаров</p>
              </div>
              <div className={styles.slide}>
                <div className={styles.image}></div>
                <p className={styles.subitle}>Александр Захаров</p>
              </div>
            </div>
          </section>
          <section className={styles.players}>
            <h2 className={styles.heading}>Победители Видеоконкурса КАРДО [6]</h2>
            <div className={styles.block}>
              <div className={styles.slide}>
                <div className={styles.image}></div>
                <p className={styles.subitle}>Александр Захаров</p>
              </div>
              <div className={styles.slide}></div>
              <div className={styles.slide}></div>
              <div className={styles.slide}></div>
            </div>
          </section>
        </main>
  );
};
