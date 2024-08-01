import { Input } from 'shared/ui/Input/Input';
import { ButtonAuth } from 'shared/ui/ButtonAuth/ButtonAuth';
import { useFormValid, validation } from 'widgets/Validation/Validation';
import { Form } from 'shared/ui/Form';
import cls from './LoginPage.module.css';

const LoginPage = () => {
  const {
    handleChange,
    value,
    error,
    isValid,
  } = useFormValid(validation, 'login');
  return (
    <Form
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
        <p className={cls.error}>{error.email}</p>
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
        <p className={cls.error}>{error.password}</p>
      )}
      <ButtonAuth isValid={isValid} name='Войти в аккаунт' />
    </Form>
  );
};

export default LoginPage;
