import {
  useEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './NavbarContent.module.css';

interface NavbarContentProps {
  className?: string;
  titles: string[];
  setFilter: any;
}

export const NavbarContent = ({
  className,
  titles,
  setFilter,
}: NavbarContentProps) => {
  const [activeText, setActiveText] = useState(0);
  const [activeElement, setActiveElement] = useState(0);
  const [widthElement] = useState(100 / (titles.length));
  const lineRef = useRef(null);

  useEffect(() => {
    lineRef.current.style.width = `${widthElement}%`;
  }, []);

  useEffect(() => {
    if (lineRef.current) {
      lineRef.current.style.left = `${widthElement * activeElement}%`;
    }
  }, [activeText]);

  const clickLinkHandler = (e: any, i: number) => {
    setActiveText(i);
    setActiveElement(i);
    setFilter(e.currentTarget.textContent);
  };

  return (
    <div className={classNames(cls.navbarContent, {}, [className])}>
      <ul className={classNames(cls.list, {}, [])}>
        {titles.map((item, i) => (
          <li key={i}
            className={classNames(cls.item, {
              [cls.active]: i === activeText,
            }, [])}
            onClick={(e) => clickLinkHandler(e, i)}
            style={{ width: `${widthElement}%` }}
          >
            <Link to='#' className={classNames(cls.link, {}, [])}>{item}</Link>
          </li>
        ))}
      </ul>
      <div className={classNames(cls.line, {}, [])}>
        <div className={classNames(cls.lineAvtive, {}, [])} ref={lineRef}></div>
      </div>
    </div>
  );
};
