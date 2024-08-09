import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import cls from './PopupModal.module.css';

interface PopupModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const textProps = [
  'Все',
  'Брейкинг',
  'Скейтбординг',
  'Фриран',
  'Паркур',
  'BMX',
  'Хип-хоп',
  'Трикинг',
  'Графити',
  'Воркаут',
  'Диджеинг',
  'Трюковой сомакат',
];

export const PopupModal: FC<PopupModalProps> = ({ className, isOpen, onClose }) => {
  return (
    <div className={classNames(cls.popup, { [cls.open]: isOpen }, [className])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.titles, {}, [])}>
          <p className={classNames(cls.clear, {}, [])}>Отчистить</p>
          <h1 className={classNames(cls.title, {}, [])}>Фильтры</h1>
        </div>
        <ul className={classNames(cls.block, {}, [])}>
          {textProps.map((text, i) => {
            return (
              <li key={i} className={classNames(cls.card, {}, [])}>
                <p className={classNames(cls.heading, {}, [])}>{text}</p>
              </li>
            );
          })}
        </ul>
        <div className={classNames(cls.filter, {}, [])}>
          <div className={classNames(cls.country)}>
            <p className={classNames(cls.all, {}, [])}>Страна</p>
            <p className={classNames(cls.choose, {}, [])}>Все</p>
            <ArrowRight />
          </div>
          <div className={classNames(cls.line, {}, [])}></div>
          <div className={classNames(cls.country)}>
            <p className={classNames(cls.all, {}, [])}>Страна</p>
            <p className={classNames(cls.choose, {}, [])}>Все</p>
            <ArrowRight />
          </div>
          <div className={classNames(cls.line, {}, [])}></div>
          <div className={classNames(cls.country)}>
            <p className={classNames(cls.all, {}, [])}>Страна</p>
            <p className={classNames(cls.choose, {}, [])}>Все</p>
            <ArrowRight />
          </div>
        </div>
        <button className={classNames(cls.button, {}, [])}>Показать результаты</button>
        <button onClick={onClose} className={classNames(cls.closeButton, {}, [])}></button>
      </div>
    </div>
  );
};
