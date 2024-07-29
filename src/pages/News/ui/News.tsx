import { Card } from 'shared/ui/Card';
import { Header } from 'shared/ui/Header';
import styles from './News.module.css';

export const News = () => {
  return (
    <main className={styles.news}>
      <section className={styles.container}>
        <Header name='Новости' />
        <Card />
        <Card />
      </section>
    </main>
  );
};
