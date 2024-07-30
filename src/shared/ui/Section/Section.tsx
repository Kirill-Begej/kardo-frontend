import { FC } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  children: React.ReactNode;
  pixelPerfect: boolean;
}

export const Section: FC<SectionProps> = ({ children, pixelPerfect }) => {
  return (
    <section className={styles.section}>
      <article className={`${styles.container} ${pixelPerfect ? styles.containerPixel : ''}`}>
        {children}
      </article>
    </section>
  );
};
