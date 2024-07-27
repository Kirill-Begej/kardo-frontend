import { FC, useEffect, useState } from 'react';
import styles from './Onboarding.module.css';

import { CloseLink } from '../../../shared/ui/CloseLink/CloseLink';
import { OnboadringItems } from './OnboardingItems';

export const Onboarding: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = () => {
    switch (currentSlide) {
      case 2:
        return styles.thirdSlide;
      case 3:
        return styles.fourthSlide;
      case 4:
        return styles.fifthSlide;
      default:
        return '';
    }
  }

  useEffect(() => {
    const changeSlide = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % OnboadringItems.length);
    }, 7000);

    return () => clearInterval(changeSlide);
  }, []);

  return (
        <section className={styles.onboard}>
            <article className={`${styles.container} ${changeSlide()}`} style={{ backgroundImage: `url(${OnboadringItems[currentSlide].image})` }}>
                {/* <div className={styles.gradient}></div> */}
                <div className={styles.slider}>
                    {OnboadringItems.map((_, i) => (
                        <div
                        key={i}
                        className={`${styles.slide} ${i === currentSlide ? styles.active : ''}`}
                        ></div>
                    ))}
                </div>
                <div className={styles.info}>
                    <h1 className={styles.title}>{OnboadringItems[currentSlide].title}</h1>
                    <p className={styles.subtitle}>{OnboadringItems[currentSlide].subtitle}</p>
                </div>
                <CloseLink />
            </article>
        </section>
  );
};
