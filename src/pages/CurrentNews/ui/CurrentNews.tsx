import { HeaderMain } from 'shared/ui/HeaderMain';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './CurrentNews.module.css';
import { CurrentNewsBlock } from './CurrentNewsBlock';

interface CurrentNewsProps {
  className?: string;
}

const CurrentNews: FC<CurrentNewsProps> = ({ className }) => {
  return (
    <div className={classNames(styles.news, {}, [className])}>
      <section className={classNames(styles.container, {}, [])}>
        <HeaderMain name='Новости' />
        <main className={classNames(styles.content, {}, [])}>
          <CurrentNewsBlock />
        </main>
      </section>
    </div>
  );
};

export default CurrentNews;
