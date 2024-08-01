import { Input } from 'shared/ui/Input/Input';
import { ButtonAuth } from 'shared/ui/ButtonAuth/ButtonAuth';
import { useFormValid, validation } from 'widgets/Validation/Validation';
import { Form } from 'shared/ui/Form';
import cls from './RegisterPage.module.css';

const RegisterPage = () => {
  const {
    value,
    error,
    handleChange,
    isValid,
  } = useFormValid(validation, 'register');
  return (
    <Form
      auth='Уже есть аккаунт?'
      link='Войти'
      to='/'
      isLogin={false}
      isRegister={true}
    >
      <Input
        name='name'
        id='name'
        value={value.name || ''}
        onChange={handleChange}
        type='text'
        isPassword={false}
        placeholder='Имя' />
        {error.name && (
        <p className={cls.error}>{error.name}</p>
        )}
      <Input
        id='email'
        name='email'
        value={value.email || ''}
        onChange={handleChange}
        type='email'
        isPassword={false}
        placeholder='E-mail' />
        {error.email && (
        <p className={cls.error}>{error.email}</p>
        )}
      <Input
        name='password'
        id='password'
        value={value.password || ''}
        onChange={handleChange}
        type='password'
        isPassword={true}
        placeholder='Пароль' />
        {error.password && (
        <p className={cls.error}>{error.password}</p>
        )}
      <ButtonAuth isValid={isValid} name='Зарегистрироваться' />
    </Form>
  );
};

export default RegisterPage;
