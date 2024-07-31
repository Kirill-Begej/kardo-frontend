import { Card } from 'shared/ui/Card';
import { HeaderMain } from 'shared/ui/HeaderMain';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './News.module.css';

interface NewsProps {
  className?: string;
}

const News: FC<NewsProps> = ({ className }) => {
  return (
    <div className={classNames(styles.news, {}, [className])}>
      <section className={classNames(styles.container, {}, [])}>
      <HeaderMain name='Новости' />
        <main className={classNames(styles.content, {}, [])}>
          <section className={classNames(styles.section, {}, [])}>
            <article className={classNames(styles.mainContainer, {}, [])}>
              <Card />
              <Card />
            </article>
          </section>
        </main>
      </section>
    </div>
  );
};

export default News;
