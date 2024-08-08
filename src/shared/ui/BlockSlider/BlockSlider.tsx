import { classNames } from 'shared/lib/classNames/classNames';
import PlayIcon from 'shared/assets/images/icons/play.svg';
import cls from './BlockSlider.module.css';

interface BlockSliderProps {
  className?: string;
  content: 'inside' | 'outside';
  slideSize: 'small' | 'normal' | 'large';
  video: boolean;
  data: any;
}

export const BlockSlider = ({
  className,
  data,
  slideSize,
  content,
  video,
}: BlockSliderProps) => {
  return (
    <ul className={classNames(cls.blockSlider, {}, [className])}>
      {data.map((item: any, i: number) => (
        <li className={classNames(cls.item, {
          [cls.large]: slideSize === 'large',
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
              {!video && (
                <div className={classNames(cls.imageWrap, {}, [cls.borderRadius])}>
                  <img src={item.image} alt="#" className={classNames(cls.image, {}, [cls.imageAbsolute])} />
                </div>
              )}
              {video && (
                <div className={classNames(cls.videoWrap, {}, [])}>
                  <div className={classNames(cls.videoAbsolute, {}, [])}>
                    <img src={item.image} alt="#" className={classNames(cls.image, {}, [cls.cover, cls.borderRadius])} />
                    <PlayIcon className={classNames(cls.icon, {}, [])} />
                  </div>
                </div>
              )}
              <h4 className={classNames(cls.title, {
                [cls.titleOutside]: !video,
                [cls.titleVideo]: video,
              }, [])}>{item.title}</h4>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
