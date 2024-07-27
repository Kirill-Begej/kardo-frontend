import { Input } from 'shared/ui/Input/Input';
import { ButtonAuth } from 'shared/ui/ButtonAuth/ButtonAuth';
import { Form } from '../../../shared/ui/Form';

export const Login = () => {
  return (
    <Form
      auth='Ещё нет аккаунта?'
      link='Зарегистрироваться'
      to='/signup'
      isLogin={true}
      isRegister={false}
    >
      <Input placeholder='E-mail' />
      <Input placeholder='Пароль' />
      <ButtonAuth name='Войти в аккаунт' />
    </Form>
  );
};
