import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PopupModal.module.css';

interface PopupModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const textProps = [
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
        <h2 className={classNames(cls.title, {}, [])}>Мои интересы</h2>
        <button onClick={onClose} className={classNames(cls.closeButton, {}, [])}></button>
        <ul className={classNames(cls.block, {}, [])}>
          {textProps.map((text, i) => {
            return (
              <li key={i} className={classNames(cls.card, {}, [])}>
                <p className={classNames(cls.heading, {}, [])}>{text}</p>
              </li>
            );
          })}
        </ul>
        <button className={classNames(cls.button, {}, [])}>Добавить</button>
      </div>
    </div>
  );
};
