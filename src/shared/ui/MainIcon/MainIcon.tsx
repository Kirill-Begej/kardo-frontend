import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainIcon.module.css';
import Icon from '../../assets/images/main_icon.svg';

interface MainIconProps {
  className?: string;
}

const MainIcon = ({ className }: MainIconProps) => {
  return (
    <Icon className={classNames(cls.icon, {}, [className])} />
  );
};

export default MainIcon;
