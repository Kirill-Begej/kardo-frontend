import { ReactNode } from 'react';
import HomeIcon from 'shared/assets/images/icons/navbar_icons/home.svg';
import HomeIconActive from 'shared/assets/images/icons/navbar_icons/home_active.svg';
import CompetitionIcon from 'shared/assets/images/icons/navbar_icons/competition.svg';
import CompetitionIconActive from 'shared/assets/images/icons/navbar_icons/competition_active.svg';
import CommunityIcon from 'shared/assets/images/icons/navbar_icons/community.svg';
import CommunityIconActive from 'shared/assets/images/icons/navbar_icons/community_active.svg';
import AboutIcon from 'shared/assets/images/icons/navbar_icons/about.svg';
import AboutIconActive from 'shared/assets/images/icons/navbar_icons/about_active.svg';
import ProfileIcon from 'shared/assets/images/icons/navbar_icons/profile.svg';
import ProfileIconActive from 'shared/assets/images/icons/navbar_icons/profile_active.svg';
import cls from '../ui/Navbar.module.css';

interface INavbarData {
  to: string;
  icon: ReactNode;
  activeIcon: ReactNode;
  text: string;
  position: string;
}

export const navbarData: INavbarData[] = [
  {
    to: '#',
    icon: <HomeIcon className={cls.icon} />,
    activeIcon: <HomeIconActive className={cls.icon} />,
    text: 'Главная',
    position: '0.8%',
  },
  {
    to: '#',
    icon: <CompetitionIcon className={cls.icon} />,
    activeIcon: <CompetitionIconActive className={cls.icon} />,
    text: 'Конкурсы',
    position: '19%',
  },
  {
    to: '#',
    icon: <CommunityIcon className={cls.icon} />,
    activeIcon: <CommunityIconActive className={cls.icon} />,
    text: 'Комьюнити',
    position: '37.3%',
  },
  {
    to: '#',
    icon: <AboutIcon className={cls.icon} />,
    activeIcon: <AboutIconActive className={cls.icon} />,
    text: 'О проекте',
    position: '57.75%',
  },
  {
    to: '#',
    icon: <ProfileIcon className={cls.icon} />,
    activeIcon: <ProfileIconActive className={cls.icon} />,
    text: 'Профиль',
    position: '77.75%',
  },
];
