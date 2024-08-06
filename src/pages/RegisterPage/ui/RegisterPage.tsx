import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import MainIcon from 'shared/ui/MainIcon/MainIcon';
import { Form } from 'shared/ui/Form';
import { AuthButton } from 'shared/ui/AuthButton/AuthButton';
import { AppPageRoutePath, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { CloseLink } from 'shared/ui/CloseLink/CloseLink';
import cls from './RegisterPage.module.css';

interface RegisterPageProps {
  className?: string;
}

const RegisterPage: FC = ({ className }: RegisterPageProps) => {
  return (
    <section className={classNames(cls.registerPage, {}, [className])}>
      <div className={classNames(cls.container, {}, [])}>
        <MainIcon className={classNames('', {}, [cls.mainIcon])} />
        <Form className={classNames('', {}, [cls.registerForm])} textSendButton='Зарегистрироваться' />
        <div className={classNames(cls.textRow, {}, [cls.textColumn])}>
          <span className={classNames(cls.text, {}, [])}>Создавая аккаунт, Вы принимаете</span>
          <Link to='#' className={cls.link}>Условия использования</Link>
        </div>
        <div className={classNames(cls.distinction, {}, [])}>
          <span className={classNames(cls.line, {}, [])}></span>
          <span>Или</span>
          <span className={classNames(cls.line, {}, [])}></span>
        </div>
        <div className={classNames(cls.buttonRow, {}, [])}>
          <AuthButton className={classNames('', {}, [cls.button])} type='Yandex' text='Яндекс'/>
          <AuthButton className={classNames('', {}, [cls.button])} type='Vkontakte' text='Вконтакте'/>
        </div>
        <div className={classNames(cls.textRow, {}, [])}>
          Уже есть аккаунт? <Link to={RoutePath.login} className={cls.link}>Войти</Link>
        </div>
      </div>
      <CloseLink
        to={ AppPageRoutePath.main }
        className={classNames(cls.close, {}, [cls.closeText])}
      >
        Пропустить
      </CloseLink>
    </section>
  );
};

export default RegisterPage;
