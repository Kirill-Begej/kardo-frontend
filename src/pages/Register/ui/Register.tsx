import { Input } from 'shared/ui/Input/Input';
import { ButtonAuth } from 'shared/ui/ButtonAuth/ButtonAuth';
import { Form } from '../../../shared/ui/Form';

export const Register = () => {
  return (
    <Form
      auth='Уже есть аккаунт?'
      link='Войти'
      to='/sign-in'
      isLogin={false}
      isRegister={true}
    >
      <Input placeholder='Имя' />
      <Input placeholder='E-mail' />
      <Input placeholder='Пароль' />
      <ButtonAuth name='Зарегистрироваться' />
    </Form>
  );
};
