import {
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.css';
import { navbarData } from '../model/navbarData';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [activeIcon, setActiveIcon] = useState(0);
  const [activeText, setActiveText] = useState(navbarData[activeIcon].text);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const { position } = navbarData[activeIcon];
      textRef.current.style.left = position;
    }
  }, [activeIcon]);

  const clickLinkHandler = (i: number) => {
    setActiveIcon(i);
    setActiveText(navbarData[i].text);
  };

  return (
    <nav className={classNames(cls.navbar, {}, [className])}>
      <div className={classNames(cls.wrapper, {}, [])}>
        <div className={classNames(cls.container, {}, [])}>
          <ul className={classNames(cls.list, {}, [])}>
            {navbarData.map((navbarLink, i) => (
              <li className={classNames(cls.item, {}, [
                activeIcon === i ? cls.active : '',
              ])} key={i}>
                <Link
                  to={navbarLink.to}
                  onClick={() => clickLinkHandler(i)}
                  className={classNames(cls.link, {}, [])}
                >
                  {activeIcon === i ? navbarLink.activeIcon : navbarLink.icon}
                </Link>
              </li>
            ))}
          </ul>
          <span className={classNames(cls.text, {}, [])} ref={textRef}>{activeText}</span>
        </div>
      </div>
    </nav>
  );
};
