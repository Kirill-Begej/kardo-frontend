import { Card } from 'shared/ui/Card';
import { Header } from 'shared/ui/Header';
import styles from './News.module.css';

export const News = () => {
  return (
    <div className={styles.news}>
      <section className={styles.container}>
      <Header name='Новости' />
        <main>
          <Card />
          <Card />
        </main>
      </section>
    </div>
  );
};
