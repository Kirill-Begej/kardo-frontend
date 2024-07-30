import { Card } from 'shared/ui/Card';
import { Header } from 'shared/ui/Header';
import styles from './News.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

interface NewsProps {
  className?: string;
}

const News: FC<NewsProps> = ({ className }) => {
  return (
    <div className={classNames(styles.news, {}, [className])}>
      <section className={classNames(styles.container, {}, [])}>
      <Header name='Новости' />
        <main>
          <Card />
          <Card />
        </main>
      </section>
    </div>
  );
};

export default News;
