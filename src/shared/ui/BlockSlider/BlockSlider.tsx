import { classNames } from 'shared/lib/classNames/classNames';
import cls from './BlockSlider.module.css';

interface BlockSliderProps {
  className?: string;
  content: 'inside' | 'outside';
  slideSize: 'small' | 'normal' | 'large';
  data: any;
}

export const BlockSlider = ({
  className,
  data,
  slideSize,
  content,
}: BlockSliderProps) => {
  return (
    <ul className={classNames(cls.blockSlider, {}, [className])}>
      {data.map((item: any, i: number) => (
        <li className={classNames(cls.item, {
          [cls.normal]: slideSize === 'normal',
          [cls.small]: slideSize === 'small',
          [cls.borderRadius]: content === 'inside',
        }, [])} key={i}>
          {content === 'inside' && (
            <div className={classNames(cls.containerAbsolute, {}, [])}>
              <img src={item.image} alt="#" className={classNames(cls.image, {}, [cls.cover])} />
              <div className={classNames(cls.wrap, {}, [])}>
                <h4 className={classNames(cls.title, {}, [cls.titleInside])}>
                  <span className={classNames(cls.subtitle, {}, [])}>{item.title}</span>
                  <span className={classNames(cls.subtitle, {}, [])}>{item.subtitle}</span>
                </h4>
              </div>
              <span className={classNames(cls.date, {}, [])}>{item.date}</span>
            </div>
          )}
          {content === 'outside' && (
            <>
              <div className={classNames(cls.imageWrap, {}, [cls.borderRadius])}>
                <img src={item.image} alt="#" className={classNames(cls.image, {}, [cls.imageAbsolute])} />
              </div>
              <h4 className={classNames(cls.title, {}, [cls.titleOutside])}>{item.title}</h4>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
