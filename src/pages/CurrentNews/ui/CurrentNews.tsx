import { Header } from 'shared/ui/Header';
import styles from './CurrentNews.module.css';
import { CurrentNewsBlock } from './CurrentNewsBlock';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

interface CurrentNewsProps {
  className?: string;
}

const CurrentNews: FC<CurrentNewsProps> = ({ className }) => {
  return (
    <div className={classNames(styles.news, {}, [className])}>
      <section className={classNames(styles.container, {}, [])}>
        <Header name='Новости' />
        <main>
          <CurrentNewsBlock />
        </main>
      </section>
    </div>
  );
};

export default CurrentNews;
