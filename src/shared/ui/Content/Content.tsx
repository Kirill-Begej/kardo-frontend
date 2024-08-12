import { classNames } from 'shared/lib/classNames/classNames';
import PlusIcon from 'shared/assets/images/icons/plus_icon.svg';
import PlayIcon from 'shared/assets/images/icons/play.svg';
import { TProfileSectionData } from 'features/ProfileSection/model/profileSectionData';
import cls from './Content.module.css';

interface ContentProps {
  className?: string;
  data: TProfileSectionData[];
  filter: string;
}

export const Content = ({ className, data, filter }: ContentProps) => {
  return (
    <ul className={classNames(classNames(cls.content, {}, [className]))}>
      {filter === 'Все' && data.map((item, i) => {
        if (item.type === 'image') {
          return <li className={classNames(cls.item, {}, [])} key={i}>
            <img src={item.image} alt="#" className={classNames(cls.image, {}, [])}/>
          </li>;
        }
        return <li className={classNames(cls.item, {}, [])} key={i}>
          <img src={item.image} alt="#" className={classNames(cls.image, {}, [])}/>
          <div className={classNames(cls.overlay, {}, [])}>
            <PlayIcon className={classNames(cls.playIcon, {}, [])} />
          </div>
        </li>;
      })}
      {filter === 'Фото' && data.map((item, i) => {
        if (item.type === 'image') {
          return <li className={classNames(cls.item, {}, [])} key={i}>
            <img src={item.image} alt="#" className={classNames(cls.image, {}, [])}/>
          </li>;
        }
      })}
      {filter === 'Видео' && data.map((item, i) => {
        if (item.type === 'video') {
          return <li className={classNames(cls.item, {}, [])} key={i}>
            <img src={item.image} alt="#" className={classNames(cls.image, {}, [])} />
            <div className={classNames(cls.overlay, {}, [])}>
              <PlayIcon className={classNames(cls.playIcon, {}, [])} />
            </div>
          </li>;
        }
      })}
      <li className={classNames(cls.item, {}, [cls.add])}>
        <PlusIcon className={classNames(cls.plusIcon, {}, [])}/>
      </li>
    </ul>
  );
};
