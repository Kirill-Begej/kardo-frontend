import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  pixelPerfect: boolean;
  className?: string;
}

export const Section: FC<SectionProps> = ({ children, pixelPerfect, className }) => {
  const container = pixelPerfect ? styles.containerPixel : styles.container;
  return (
    <section className={classNames(styles.section, {}, [className])}>
      <article className={classNames(styles.container, {}, [container])}>
        {children}
      </article>
    </section>
  );
};
