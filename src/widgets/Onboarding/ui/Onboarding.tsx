/* 
    1. слайдер пока тестовый, без анимации и остановок. 
    2. Переход обычный, меняется картинки и текст. +
    3. вынести button в отдельный компонент и edit --> <Link>
    4. добавить анимации заполнение для slide
    5. с помощью непрерывного пробела, исправить текстовые теги для pixelPerfect
*/

import styles from './Onboarding.module.css'

import imagebg from '../../../shared/assets/images/Onboarding/Photo_slide_1.jpg';
import imagebg2 from '../../../shared/assets/images/Onboarding/Photo_slide_2.jpg';
import imagebg3 from '../../../shared/assets/images/Onboarding/Photo_slide_3.jpg';
import imagebg4 from '../../../shared/assets/images/Onboarding/Photo_slide_4.jpg';
import imagebg5 from '../../../shared/assets/images/Onboarding/Photo_slide_5.jpg'

import { FC, useEffect, useState } from 'react';

interface OnboardingProps {
    id: number;
    image: string;
    alt: string;
    title: string;
    subtitle: string;
}

const OnboadringItems: OnboardingProps[] = [
    {
      id: 1,
      image: imagebg,
      alt: `test`,
      title: `Добро пожаловать в КАРДО!`,
      subtitle: `Это ваше персональное приложение для участия в конкурсах и взаимодействия с сообществом творческих людей`,
    },
    {
      id: 2,
      image: imagebg2,
      alt: `test`,
      title: `Участвуй в конкурсах`,
      subtitle: `В нашем приложении ты сможешь легко подать заявку и следить за результатами конкурсов`,
    },
    {
      id: 3,
      image: imagebg3,
      alt: `test`,
      title: `Создай своё портфолио`,
      subtitle: `Добавляй фото и видео о своих достижениях. Смотри успехи других участников`,
    },
    {
      id: 4,
      image: imagebg4,
      alt: `test`,
      title: `Будь в курсе`,
      subtitle: `Узнавай первым о всех событиях и жизни КАРДО благодаря уведомлениям о новых конкурсах и изменениях в расписании`,
    },
    {
      id: 5,
      image: imagebg5,
      alt: `test`,
      title: `Готов начать?`,
      subtitle: `Зарегистрируйся сейчас и стань частью сообщества КАРДО!`
    }
  ];

export const Onboarding: FC = () => {
    const [ currentSlide, setCurrentSlide ] = useState(0);

    useEffect(() => {
        const changeSlide = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % OnboadringItems.length);
        }, 7000);

        return () => clearInterval(changeSlide);
    }, [])
    
    return (
        <section className={styles.onboard}>
            <article className={styles.container} style={{ backgroundImage: `url(${OnboadringItems[currentSlide].image})` }}>
                <div className={styles.gradient}></div>
                <div className={styles.info}>
                    <h1 className={styles.title}>{OnboadringItems[currentSlide].title}</h1>
                    <p className={styles.subtitle}>{OnboadringItems[currentSlide].subtitle}</p>
                </div>
                <div className={styles.slider}>
                    {OnboadringItems.map((_, i) => (
                        <div
                        key={i}
                        className={`${styles.slide} ${i === currentSlide ? styles.active : ''}`}
                        ></div>
                    ))}
                </div>
                <button className={styles.close}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path d="M20 20L4 4M20 4L4 20" stroke="#F1F1F1" stroke-width="2" stroke-linecap="square"/>
                    </svg>
                </button>
            </article>
        </section>
    )
}