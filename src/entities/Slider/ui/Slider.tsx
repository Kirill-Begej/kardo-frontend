import { classNames } from 'shared/lib/classNames/classNames';
import SliderImage from 'shared/assets/images/Slider/slider_image.jpg';
import cls from './Slider.module.css';

interface SliderProps {
  className?: string;
}

export const Slider = ({ className }: SliderProps) => {
  return (
    <section className={classNames(cls.slider, {}, [className])}>
      <div className={classNames(cls.container, {}, [])}>
        <ul className={classNames(cls.list, {}, [])}>
          {[...Array(5)].map((_, index) => (
            <li className={classNames(cls.item, {}, [])} key={index}>
              <img src={SliderImage} alt="#" className={classNames(cls.image, {}, [])} />
            </li>
          ))}
        </ul>
        <ul className={classNames(cls.pagination, {}, [])}>
          {[...Array(5)].map((_, index) => (
            <li className={classNames(cls.point, {}, [
              index === 2 && cls.active,
            ])} key={index}></li>
          ))}
        </ul>
      </div>
    </section>
  );
};
