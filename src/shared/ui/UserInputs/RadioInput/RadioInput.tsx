import { classNames } from 'shared/lib/classNames/classNames';
import DisabledIcon from 'shared/assets/images/icons/radio_icon_disabled.svg';
import ActiveIcon from 'shared/assets/images/icons/radio_icon_active.svg';
import { useState } from 'react';
import styles from './RadioInput.module.css';

export const RadioInput = () => {
  const [activeRadio, setActiveRadio] = useState(null);

  return (
    <div className={classNames(styles.radio, {}, [])}>
      <p className={classNames(styles.text, {}, [])}>Пол</p>
      <div className={styles.block}>
        <label className={classNames(styles.label, {}, [])}>
          <span className={classNames(styles.radioText, {}, [])}>Мужской</span>
          {activeRadio === 'male' ? <ActiveIcon className={classNames(styles.radioIcon, {}, [])} /> : <DisabledIcon className={classNames(styles.radioIcon, {}, [])} />}
          <input
            name='gender'
            type='radio'
            checked={activeRadio === 'male'}
            className={classNames(styles.radioInput, {}, [])}
            onChange={() => setActiveRadio('male')}
            />
        </label>
        <label className={classNames(styles.label, {}, [])}>
          <span className={classNames(styles.radioText, {}, [])}>Женский</span>
          {activeRadio === 'female' ? <ActiveIcon className={classNames(styles.radioIcon, {}, [])} /> : <DisabledIcon className={classNames(styles.radioIcon, {}, [])} />}
          <input
            name='gender'
            type='radio'
            className={classNames(styles.radioInput, {}, [])}
            onChange={() => setActiveRadio('female')}
            checked={activeRadio === 'female'}
          />
        </label>
      </div>
    </div>
  );
};
