import { classNames } from 'shared/lib/classNames/classNames';
import YandexIcon from 'shared/assets/images/icons/yandex_icon.svg';
import VkontakteIcon from 'shared/assets/images/icons/vk_icon.svg';
import cls from './AuthButton.module.css';

interface AuthButtonProps {
  className?: string;
  type: 'Yandex' | 'Vkontakte';
  text: string;
}

export const AuthButton = ({ className, type, text }: AuthButtonProps) => {
  return (
    <button type='button' className={classNames(cls.authButton, {}, [className])}>
      {type === 'Yandex' && <YandexIcon />}
      {type === 'Vkontakte' && <VkontakteIcon />}
      <span className={classNames(cls.text, {}, [])}>{text}</span>
    </button>
  );
};
