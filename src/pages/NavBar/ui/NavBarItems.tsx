import { ReactNode } from 'react';

import HomeIcon from 'shared/assets/images/icons/NavBarIcons/House.svg';
import HomeIconActive from 'shared/assets/images/icons/NavBarIcons/House_active.svg';
import GlobeIcon from 'shared/assets/images/icons/NavBarIcons/Globe.svg';
import GlobeIconActive from 'shared/assets/images/icons/NavBarIcons/Globe_active.svg';
import StickerIcon from 'shared/assets/images/icons/NavBarIcons/Sticker.svg';
import StickerIconActive from 'shared/assets/images/icons/NavBarIcons/Sticker_active.svg';
import TrophyIcon from 'shared/assets/images/icons/NavBarIcons/Trophy.svg';
import TrophyIconActive from 'shared/assets/images/icons/NavBarIcons/Trophy_active.svg';
import UserIcon from 'shared/assets/images/icons/NavBarIcons/User.svg';
import UserIconActive from 'shared/assets/images/icons/NavBarIcons/User_active.svg';

import styles from './NavBar.module.css';

interface NavBarItem {
  id: number,
  to: string;
  icon: ReactNode;
  activeIcon: ReactNode;
  text: string;
}

export const NavBarProps: NavBarItem[] = [
  {
    id: 1,
    to: '/nav',
    icon: <HomeIcon className={styles.icon} />,
    activeIcon: <HomeIconActive className={styles.icon} />,
    text: 'Главная',
  },
  {
    id: 2,
    to: '/nav',
    icon: <TrophyIcon className={styles.icon} />,
    activeIcon: <TrophyIconActive className={styles.icon} />,
    text: 'Конкурсы',
  },
  {
    id: 3,
    to: '/nav',
    icon: <GlobeIcon className={styles.icon} />,
    activeIcon: <GlobeIconActive className={styles.icon} />,
    text: 'Комьюнити',
  },
  {
    id: 4,
    to: '/nav',
    icon: <StickerIcon className={styles.icon} />,
    activeIcon: <StickerIconActive className={styles.icon} />,
    text: 'О проекте',
  },
  {
    id: 5,
    to: '/nav',
    icon: <UserIcon className={styles.icon} />,
    activeIcon: <UserIconActive className={styles.icon} />,
    text: 'Профиль',
  },
];

export const position = [
  {
    bottom: '10px',
    left: '22px',
  },
  {
    bottom: '10px',
    left: '85px',
  },
  {
    bottom: '10px',
    left: '150px',
  },
  {
    bottom: '10px',
    left: '220px',
  },
  {
    bottom: '10px',
    left: '290px',
  },
];
