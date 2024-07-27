import { Input } from 'shared/ui/Input/Input';
import { ButtonAuth } from 'shared/ui/ButtonAuth/ButtonAuth';
import { Form } from '../../../shared/ui/Form';

export const Register = () => {
  return (
    <Form
      auth='Создавая аккаунт, Вы принимаете '
      link='Условия использования'
      to='/sign-in'
      isLogin={false}
    >
      <Input placeholder='Имя' />
      <Input placeholder='E-mail' />
      <Input placeholder='Пароль' />
      <ButtonAuth name='Зарегистрироваться' />
    </Form>
  );
};
