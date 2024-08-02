import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import styles from './NavBar.module.css';
import { NavBarProps, position } from './NavBarItems';

export const NavBar = () => {
  const [activeIcon, setActiveIcon] = useState(0);
  const [activeText, setActiveText] = useState(NavBarProps[0].text);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const { bottom, left } = position[activeIcon];
      ref.current.style.bottom = bottom;
      ref.current.style.left = left;
    }
  }, [activeIcon]);

  const handleLinkClick = (i: number) => {
    setActiveIcon(i);
    setActiveText(NavBarProps[i].text);
  };

  return (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        {NavBarProps.map((link, i) => (
          <Link
            key={link.id}
            to={link.to}
            className={`${styles.link} ${activeIcon === i ? styles.active : ''}`}
            onClick={() => handleLinkClick(i)}
          >
            {activeIcon === i ? link.activeIcon : link.icon}
          </Link>
        ))}
      </nav>
      <div className={styles.paragraph} ref={ref}>
        <p className={styles.text}>{activeText}</p>
      </div>
    </div>
  );
};
