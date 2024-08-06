import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import cls from './Picker.module.css';

interface PickerProps {
  onPick: (index: number) => void;
}

export const Picker: FC<PickerProps> = ({ onPick }) => {
  const [activeForm, setActiveForm] = useState(0);

  const handleChangeForm = (index: number) => {
    setActiveForm(index);
    onPick(index);
  };

  const pickerText = ['Личные данные', 'Контакты', 'Местоположение', 'Прочее'];

  return (
    <section className={classNames(cls.section, {}, [])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <ul className={classNames(cls.picker, {}, [])}>
          {pickerText.map((t, i) => {
            return (
              <li
              key={i}
              className={classNames(cls.pick, { [cls.pickActive]: activeForm === i }, [])}
              onClick={() => handleChangeForm(i)}
            >
              <p className={classNames(cls.text, { [cls.activeText]: activeForm === i }, [])}>
                {t}
              </p>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
