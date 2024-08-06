import {
  ChangeEvent,
  createRef,
  FC,
  FormEvent,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useValidation } from 'shared/lib/hooks/useValidation';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import cls from './Form.module.css';

interface FormProps {
  className?: string;
  textSendButton: string;
}

export const Form: FC<FormProps> = ({ className, textSendButton }) => {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useValidation({});
  const passwordRef = createRef<HTMLInputElement>();
  const [passwordIcon, setPasswordIcon] = useState<'HideIcon' | 'ShowIcon'>('HideIcon');
  const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');

  const onIconClick = () => {
    if (passwordRef.current.type === 'password') {
      setPasswordType('text');
      setPasswordIcon('ShowIcon');
      passwordRef.current.focus();
    } else {
      setPasswordType('password');
      setPasswordIcon('HideIcon');
      passwordRef.current.focus();
    }
  };

  const onSubmitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className={classNames(cls.form, {}, [className])} onSubmit={onSubmitFormHandler}>
      <div className={classNames(cls.container, {}, [])}>
        <Input
          type='email'
          placeholder='E-mail'
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          value={values.email || ''}
          name='email'
          error={Object.prototype.hasOwnProperty.call(errors, 'email')}
          errorText={errors.email || ''}
        />
        <Input
          type={passwordType}
          placeholder='Пароль'
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
          value={values.password || ''}
          name='password'
          error={Object.prototype.hasOwnProperty.call(errors, 'password')}
          errorText={errors.password || ''}
          ref={passwordRef}
          onIconClick={onIconClick}
          icon={passwordIcon}
        />
      </div>
      <Button type='submit' active={isValid}>{textSendButton}</Button>
    </form>
  );
};
