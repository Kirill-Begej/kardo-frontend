import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextInput } from 'shared/ui/UserInputs/TextInput/TextInput';
import { RadioInput } from 'shared/ui/UserInputs/RadioInput/RadioInput';
import { TextArea } from 'shared/ui/UserInputs/TextArea/TextArea';
import cls from './Form.module.css';

interface FormProrps {
  className?: string;
  type: 'general' | 'contacts' | 'place' | 'others';
}
export const Form: FC<FormProrps> = ({ className, type }) => {
  const typeOfRender = () => {
    switch (type) {
      case 'general':
        return (
          <>
            <TextInput
              placeholder='Имя'
              name='name'
              nameText='Имя'
              type='text'
            />
            <TextInput
              placeholder='Фамилия'
              name='surname'
              nameText='Фамилия'
              type='text'
            />
            <TextInput
              placeholder='Имя'
              name='name'
              nameText='Отчетсво'
              type='text'
            />
            <TextInput
              placeholder='11.11.1111'
              name='date'
              nameText='Дата рождения'
              type='text'
            />
            <RadioInput />
          </>
        );
      case 'contacts':
        return (
          <>
            <TextInput
              placeholder='Email'
              name='email'
              nameText='Email'
              type='email'
            />
            <TextInput
              placeholder='Телефон'
              name='telephone'
              nameText='Телефон'
              type='tel'
            />
            <TextInput
              placeholder='Вставьте ссылку'
              name='telephone'
              nameText='Социальная сеть'
              type='text'
            />
          </>
        );
      case 'place':
        return (
          <>
            <TextInput
              placeholder='Страна'
              name='country'
              nameText='Страна'
              type='text'
            />
            <TextInput
              placeholder='Регион'
              name='region'
              nameText='Регион'
              type='text'
            />
            <TextInput
              placeholder='Город'
              name='city'
              nameText='Город'
              type='text'
            />
          </>
        );
      case 'others':
        return (
          <>
            <TextInput
              placeholder='Вставьте ссылку'
              name='portfolio'
              nameText='Портфолио'
              type='text'
            />
            <TextArea />
          </>
        );
      default:
        return (
          <>
            <TextInput
              placeholder='Имя'
              name='name'
              nameText='Имя'
              type='text'
            />
            <TextInput
              placeholder='Фамилия'
              name='surname'
              nameText='Фамилия'
              type='text'
            />
            <TextInput
              placeholder='Имя'
              name='name'
              nameText='Отчетсво'
              type='text'
            />
            <TextInput
              placeholder='11.11.1111'
              name='date'
              nameText='Дата рождения'
              type='text'
            />
            <RadioInput />
          </>
        );
    }
  };

  return (
    <form className={classNames(cls.form, {}, [className])}>
      <div className={classNames(cls.inputs, {}, [])}>
        {typeOfRender()}
      </div>
      <button className={classNames(cls.button, {}, [])}>Сохранить изменения</button>
    </form>
  );
};
