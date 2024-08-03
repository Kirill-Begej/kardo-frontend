import {
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { CloseLink } from 'shared/ui/CloseLink/CloseLink';
import { onbordingAnimationTime } from 'app/variables/global';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import CloseIcon from 'shared/assets/images/icons/close_icon.svg';
import cls from './OnboardingPage.module.css';
import { onboardingPageData } from '../model/onboardingPageData';

interface OnboardingPageProps {
  className?: string;
}

export const OnboardingPage: FC = ({ className }: OnboardingPageProps) => {
  const activeSlide = useRef(null);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);
  const buttonLeft = useRef(null);
  const buttonRight = useRef(null);
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlideClassName = () => {
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

  const changeIntervalSlide = () => {
    return setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % onboardingPageData.length);
    }, onbordingAnimationTime * 1000);
  };

  const clickLeftButtonHandler = () => {
    clearInterval(intervalRef.current);
    setCurrentSlide((prevSlide) => prevSlide - 1);
    const changeSlide = changeIntervalSlide();
    intervalRef.current = changeSlide;
  };

  const clickRightButtonHandler = () => {
    clearInterval(intervalRef.current);
    if (currentSlide === onboardingPageData.length - 1) {
      navigate('/auth');
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
    const changeSlide = changeIntervalSlide();
    intervalRef.current = changeSlide;
  };

  useEffect(() => {
    const changeSlide = changeIntervalSlide();
    intervalRef.current = changeSlide;

    return () => {
      clearInterval(changeSlide);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    let lastSlide: ReturnType<typeof setTimeout>;
    buttonLeft.current.disabled = false;
    activeSlide.current.style.animationDuration = `${onbordingAnimationTime}s`;
    if (currentSlide === 0) {
      buttonLeft.current.disabled = true;
    }
    if (currentSlide === onboardingPageData.length - 1) {
      clearInterval(intervalRef.current);
      lastSlide = setTimeout(() => {
        navigate(RoutePath.login);
      }, onbordingAnimationTime * 1000);
      timeoutRef.current = lastSlide;
    }

    return () => clearTimeout(lastSlide);
  }, [currentSlide]);

  return (
    <section className={classNames(cls.onboard, {}, [className])}>
      <div
        className={classNames(cls.container, {}, [changeSlideClassName()])}
        style={{ backgroundImage: onboardingPageData[currentSlide].image }}
      >
        <div className={classNames(cls.wrap, {}, [])}>
          <div className={classNames(cls.gradient, {}, [])}></div>
          <div className={classNames(cls.slider, {}, [cls.positionUp])}>
            {onboardingPageData.map((_, i) => (
              <div
                key={i}
                ref={i === currentSlide ? activeSlide : null}
                className={classNames(cls.slide, {}, [
                  i === currentSlide ? cls.active : '',
                  i < currentSlide ? cls.noactive : '',
                ])}
              ></div>
            ))}
          </div>
          <div className={classNames(cls.info, {}, [cls.positionUp])}>
            <h2 className={classNames(cls.title, {}, [])}>
              {onboardingPageData[currentSlide].title}
            </h2>
            <p className={classNames(cls.subtitle, {}, [])}>
              {onboardingPageData[currentSlide].subtitle}
            </p>
          </div>
        </div>
        <CloseLink to={RoutePath.login} className={classNames(cls.closeLink, {}, [])}>
          <CloseIcon className={classNames(cls.closeIcon, {}, [])} />
        </CloseLink>
        <div className={classNames(cls.buttonContainer, {}, [cls.positionUp])}>
          <button
            type='button'
            className={classNames(cls.button, {}, [])}
            ref={buttonLeft}
            onClick={clickLeftButtonHandler}
          ></button>
          <button
            type='button'
            className={classNames(cls.button, {}, [])}
            ref={buttonRight}
            onClick={clickRightButtonHandler}
          ></button>
        </div>
      </div>
    </section>
  );
};

export default OnboardingPage;
