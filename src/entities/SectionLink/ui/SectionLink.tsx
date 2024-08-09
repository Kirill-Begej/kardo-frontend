import { Link, To } from 'react-router-dom';
import { BlockTitle } from 'shared/ui/BlockTitle/BlockTitle';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SectionLink.module.css';

interface SectionLinkProps {
  className?: string;
  title: string;
  to: To;
  image: string;
}

export const SectionLink = ({
  className,
  title,
  to,
  image,
}: SectionLinkProps) => {
  return (
    <section className={classNames(cls.sectionLink, {}, [className])}>
      <div className={classNames(cls.container, {}, [])}>
        <BlockTitle title={title} />
        <Link to={to} className={classNames(cls.link, {}, [])}>
          <img src={image} alt="#" className={classNames(cls.image, {}, [])} />
        </Link>
      </div>
    </section>
  );
};
