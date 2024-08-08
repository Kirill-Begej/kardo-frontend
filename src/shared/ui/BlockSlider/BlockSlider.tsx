import { classNames } from 'shared/lib/classNames/classNames';
import { INewsSectionData } from 'features/NewsSection/model/newsSectionData';
import cls from './BlockSlider.module.css';

interface BlockSliderProps {
  className?: string;
  data: INewsSectionData[];
}

export const BlockSlider = ({ className, data }: BlockSliderProps) => {
  return (
    <ul className={classNames(cls.blockSlider, {}, [className])}>
      {data.map((item, i) => (
        <li className={classNames(cls.item, {}, [])} key={i}>
          <div className={classNames(cls.container, {}, [])}>
            <img src={item.image} alt="#" className={classNames(cls.image, {}, [])} />
            <div className={classNames(cls.wrap, {}, [])}>
              <h4 className={classNames(cls.title, {}, [])}>
                <span className={classNames(cls.subtitle, {}, [])}>{item.title}</span>
                <span className={classNames(cls.subtitle, {}, [])}>{item.subtitle}</span>
              </h4>
            </div>
            <span className={classNames(cls.date, {}, [])}>{item.date}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
