import { Header } from 'shared/ui/Header';
import styles from './CurrentNews.module.css';
import { CurrentNewsBlock } from './CurrentNewsBlock';

export const CurrentNews = () => {
  return (
    <div className={styles.content}>
      <section className={styles.container}>
        <Header name='Новости' />
        <main>
          <CurrentNewsBlock />
        </main>
      </section>
    </div>
  );
};
