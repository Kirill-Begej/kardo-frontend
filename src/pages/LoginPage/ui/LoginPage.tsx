import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import MainIcon from 'shared/ui/MainIcon/MainIcon';
import { Form } from 'entities/Form';
import { Button } from 'shared/ui/Button/Button';
import YandexIcon from 'shared/assets/images/icons/yandex_icon.svg';
import VkontakteIcon from 'shared/assets/images/icons/vk_icon.svg';
import { AppPageRoutePath, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { CloseLink } from 'shared/ui/CloseLink/CloseLink';
import cls from './LoginPage.module.css';

interface LoginPageProps {
  className?: string;
}

const LoginPage: FC = ({ className }: LoginPageProps) => {
  return (
    <section className={classNames(cls.loginPage, {}, [className])}>
      <div className={classNames(cls.container, {}, [])}>
        <MainIcon className={classNames('', {}, [cls.mainIcon])} />
        <Form className={classNames('', {}, [cls.loginForm])} textSendButton='Войти в аккаунт' />
        <div className={classNames(cls.distinction, {}, [])}>
          <span className={classNames(cls.line, {}, [])}></span>
          <span>Или</span>
          <span className={classNames(cls.line, {}, [])}></span>
        </div>
        <div className={classNames(cls.buttonRow, {}, [])}>
          <Button type='button' className={classNames(cls.authButton, {}, [])}>
            <YandexIcon />
            <span className={classNames(cls.text, {}, [])}>Яндекс</span>
          </Button>
          <Button type='button' className={classNames(cls.authButton, {}, [])}>
            <VkontakteIcon />
            <span className={classNames(cls.text, {}, [])}>Вконтакте</span>
          </Button>
        </div>
        <div className={classNames(cls.registerRow, {}, [])}>
          <span className={classNames(cls.registerText, {}, [])}>Ещё нет аккаунта? </span>
          <Link
            to={RoutePath.register}
            className={cls.link}>Зарегистрироваться</Link>
        </div>
        <Link to='#' className={cls.link}>Забыли пароль?</Link>
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

export default LoginPage;
