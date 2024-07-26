/*
    1. слайдер пока тестовый, без анимации и остановок.
    2. Переход обычный, меняется картинки и текст. +
    3. вынести button в отдельный компонент и edit --> <Link>
    4. добавить анимации заполнение для slide
    5. с помощью непрерывного пробела, исправить текстовые теги для pixelPerfect
    6. max-width: 1024px страницы.
    7. padding-bottom: %;
*/

import { FC, useEffect, useState } from 'react';
import styles from './Onboarding.module.css';

import { CloseLink } from '../../../shared/ui/CloseLink/CloseLink';
import { OnboadringItems } from './OnboardingItems';

export const Onboarding: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const changeSlide = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % OnboadringItems.length);
    }, 7000);

    return () => clearInterval(changeSlide);
  }, []);

  return (
        <section className={styles.onboard}>
            <article className={`${styles.container} ${currentSlide === 3 ? styles.fourthSlide : ''}`} style={{ backgroundImage: `url(${OnboadringItems[currentSlide].image})` }}>
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
