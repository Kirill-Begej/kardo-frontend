import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import ArrowRight from 'shared/assets/images/icons/chevronRight.svg';
import CloseIcon from 'shared/assets/images/icons/close_icon.svg';
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
  'Граффити',
  'Воркаут',
  'Трюковой сомакат',
  'Диджеинг',
];

export const PopupModal: FC<PopupModalProps> = ({ className, isOpen, onClose }) => {
  return (
    <div className={classNames(cls.popup, { [cls.open]: isOpen }, [className])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.titles, {}, [])}>
          <div className={classNames(cls.names, {}, [])}>
            <p className={classNames(cls.clear, {}, [])}>Отчистить</p>
            <h1 className={classNames(cls.title, {}, [])}>Фильтры</h1>
          </div>
          <button onClick={onClose} className={classNames(cls.closeButton, {}, [])}>
            <CloseIcon className={classNames(cls.svg, {}, [])} />
          </button>
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
            <p className={classNames(cls.all, {}, [])}>Город</p>
            <p className={classNames(cls.choose, {}, [])}>Все</p>
            <ArrowRight />
          </div>
          <div className={classNames(cls.line, {}, [])}></div>
          <div className={classNames(cls.country)}>
            <p className={classNames(cls.all, {}, [])}>Участник</p>
            <label className={classNames(cls.label, {}, [])}>
              <input
                className={classNames(cls.checkbox)}
                type='checkbox'
                placeholder='Чекбокс для уведомления'
              />
              <span className={cls.switch}></span>
            </label>
          </div>
        </div>
        <button className={classNames(cls.button, {}, [])}>Показать результаты</button>
      </div>
    </div>
  );
};
