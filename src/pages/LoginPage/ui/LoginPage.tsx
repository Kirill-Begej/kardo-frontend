// import { Input } from 'shared/ui/Input/Input';
// import { ButtonAuth } from 'shared/ui/ButtonAuth/ButtonAuth';
// import { useFormValid, validation } from 'widgets/Validation/Validation';
import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
// import { Form } from 'widgets/Form';
import MainIcon from 'shared/ui/MainIcon/MainIcon';
import { LoginForm } from 'widgets/LoginForm';
import { CloseLink } from 'shared/ui/CloseLink/CloseLink';
import cls from './LoginPage.module.css';

interface LoginPageProps {
  className?: string;
}

const LoginPage: FC = ({ className }: LoginPageProps) => {
  // const {
  //   handleChange,
  //   value,
  //   error,
  //   isValid,
  // } = useFormValid(validation, 'login');

  return (
    <section className={classNames(cls.login, {}, [className])}>
      <div className={classNames(cls.container, {}, [className])}>
        <MainIcon />
        <LoginForm />
        {/* <Form
          auth='Ещё нет аккаунта?'
          link='Зарегистрироваться'
          to='/signup'
          isLogin={true}
          isRegister={false}
        >
          <Input
            id='email'
            name='email'
            value={value.email || ''}
            onChange={handleChange}
            type='email'
            isPassword={false}
            placeholder='E-mail'
          />
          {error.email && (
            <p className={classNames(cls.error, {}, [className])}>{error.email}</p>
          )}
          <Input
            id='password'
            name='password'
            value={value.password || ''}
            onChange={handleChange}
            type='password'
            isPassword={true}
            placeholder='Пароль'
          />
          {error.password && (
            <p className={classNames(cls.error, {}, [className])}>{error.password}</p>
          )}
          <ButtonAuth isValid={isValid} name='Войти в аккаунт' />
        </Form> */}
      </div>
      <CloseLink to='/' className={classNames(cls.close, {}, [cls.closeText])}>Пропустить</CloseLink>
    </section>
  );
};

export default LoginPage;
