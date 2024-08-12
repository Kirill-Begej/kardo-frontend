import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import BellIcon from 'shared/assets/images/icons/bell_icon.svg';
import GearIcon from 'shared/assets/images/icons/gear_icon.svg';
import cls from './HeaderMain.module.css';

interface HeaderMainProps {
  className?: string;
  leftLinkIcon: 'bell';
  leftLinkTo: string;
  title: string;
  rightLinkIcon?: 'gear';
  rightLinkTo?: string;
}

export const HeaderMain = ({
  className,
  leftLinkIcon,
  leftLinkTo,
  title,
  rightLinkIcon,
  rightLinkTo,
}: HeaderMainProps) => {
  return (
    <header className={classNames(cls.headerMain, {}, [className])}>
      <div className={classNames(cls.wrapper, {}, [])}>
        <div className={classNames(cls.container, {}, [])}>
          <Link to={leftLinkTo}>
            {leftLinkIcon === 'bell' && <BellIcon className={classNames(cls.image, {}, [])} />}
          </Link>
          <h3 className={classNames(cls.title, {}, [])}>{title}</h3>
          <div className={classNames(cls.wrap, {}, [])}>
            {rightLinkIcon && (
              <Link to={rightLinkTo}>
                {rightLinkIcon === 'gear' && <GearIcon className={classNames(cls.image, {}, [])} />}
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
