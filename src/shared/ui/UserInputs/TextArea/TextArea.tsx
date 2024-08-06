import { classNames } from 'shared/lib/classNames/classNames';
import cls from './TextArea.module.css';

export const TextArea = () => {
  return (
    <label className={classNames(cls.block, {}, [])}>
      <p className={classNames(cls.text, {}, [])}>О Себе</p>
      <textarea placeholder='Расскажите о себе' className={classNames(cls.textarea, {}, [])}></textarea>
    </label>
  );
};
