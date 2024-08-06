import { classNames } from 'shared/lib/classNames/classNames';
import DisabledIcon from 'shared/assets/images/icons/radio_icon_disabled.svg';
import ActiveIcon from 'shared/assets/images/icons/radio_icon_active.svg';
import { useState } from 'react';
import cls from './RadioInput.module.css';

export const RadioInput = () => {
  const [activeRadio, setActiveRadio] = useState(null);

  return (
    <div className={classNames(cls.radio, {}, [])}>
      <p className={classNames(cls.text, {}, [])}>Пол</p>
      <div className={cls.block}>
        <label className={classNames(cls.label, {}, [])}>
          <span className={classNames(cls.radioText, {}, [])}>Мужской</span>
          {activeRadio === 'male' ? <ActiveIcon className={classNames(cls.radioIcon, {}, [])} /> : <DisabledIcon className={classNames(cls.radioIcon, {}, [])} />}
          <input
            name='gender'
            type='radio'
            checked={activeRadio === 'male'}
            className={classNames(cls.radioInput, {}, [])}
            onChange={() => setActiveRadio('male')}
            />
        </label>
        <label className={classNames(cls.label, {}, [])}>
          <span className={classNames(cls.radioText, {}, [])}>Женский</span>
          {activeRadio === 'female' ? <ActiveIcon className={classNames(cls.radioIcon, {}, [])} /> : <DisabledIcon className={classNames(cls.radioIcon, {}, [])} />}
          <input
            name='gender'
            type='radio'
            className={classNames(cls.radioInput, {}, [])}
            onChange={() => setActiveRadio('female')}
            checked={activeRadio === 'female'}
          />
        </label>
      </div>
    </div>
  );
};
