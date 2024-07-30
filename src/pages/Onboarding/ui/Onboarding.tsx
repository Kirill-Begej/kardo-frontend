import { FC, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Onboarding.module.css';
import { CloseLink } from '../../../shared/ui/CloseLink/CloseLink';
import { OnboadringItems } from './OnboardingItems';

interface OnboardingProps {
  className?: string;
}

export const Onboarding: FC = ({ className }: OnboardingProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = () => {
    switch (currentSlide) {
      case 2:
        return cls.thirdSlide;
      case 3:
        return cls.fourthSlide;
      case 4:
        return cls.fifthSlide;
      default:
        return '';
    }
  };

  useEffect(() => {
    const changeSlide = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % OnboadringItems.length);
    }, 7000);

    return () => clearInterval(changeSlide);
  }, []);

  return (
        <section className={classNames(cls.onboard, {}, [className])}>
            <article
              className={classNames(cls.container, {}, [className, changeSlide()])}
              style={ { backgroundImage: `url(${OnboadringItems[currentSlide].image})` }}
            >
                {/* <div className={cls.gradient}></div> */}
                <div className={classNames(cls.slider, {}, [className])}>
                    {OnboadringItems.map((_, i) => (
                        <div
                        key={i}
                        className={classNames(cls.slide, {}, [className, i === currentSlide ? cls.active : ''])}
                        ></div>
                    ))}
                </div>
                <div className={classNames(cls.info, {}, [className])}>
                    <h1 className={classNames(cls.title, {}, [className])}>
                      {OnboadringItems[currentSlide].title}
                    </h1>
                    <p className={classNames(cls.subtitle, {}, [className])}>
                      {OnboadringItems[currentSlide].subtitle}
                    </p>
                </div>
                <CloseLink />
            </article>
        </section>
  );
};
