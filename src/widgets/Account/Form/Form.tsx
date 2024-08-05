import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextInput } from 'shared/ui/UserInputs/TextInput/TextInput';
import { RadioInput } from 'shared/ui/UserInputs/RadioInput/RadioInput';
import styles from './Form.module.css';

interface FormProrps {
  className?: string;
}
export const Form: FC<FormProrps> = ({ className }) => {
  return (
    <form className={classNames(styles.form, {}, [className])}>
      <div className={classNames(styles.inputs, {}, [])}>
        <TextInput
          placeholder='Имя'
          name='name'
          nameText='Имя'
        />
        <TextInput
          placeholder='Фамилия'
          name='surname'
          nameText='Фамилия'
        />
        <TextInput
          placeholder='Имя'
          name='name'
          nameText='Отчетсво'
        />
        <TextInput
          placeholder='11.11.1111'
          name='date'
          nameText='Дата рождения'
        />
        <RadioInput />
      </div>
      <button className={classNames(styles.button, {}, [])}>Сохранить изменения</button>
    </form>
  );
};
