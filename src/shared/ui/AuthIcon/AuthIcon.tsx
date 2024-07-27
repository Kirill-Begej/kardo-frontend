import { FC } from 'react';
import styles from './AuthIcon.module.css';
import Yandex from '../../assets/images/icons/icon_yandex.svg';
import VK from '../../assets/images/icons/icon_vk.svg';

interface AuthIconProps {
  isYandex: boolean;
}
const AuthIcon: FC<AuthIconProps> = ({ isYandex }) => {
  return (
    isYandex ? <Yandex className={styles.icon} /> : <VK className={styles.icon} />
  );
};

export default AuthIcon;
