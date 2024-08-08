import { Link, To } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { BlockTitle } from 'shared/ui/BlockTitle/BlockTitle';
import { BlockSlider } from 'shared/ui/BlockSlider/BlockSlider';
import { INewsSectionData } from 'features/NewsSection/model/newsSectionData';
import cls from './SectionSlider.module.css';

interface SectionSliderProps {
  className?: string;
  to: To;
  title: string;
  subtitle: string;
  data: INewsSectionData[];
}

export const SectionSlider = ({
  className,
  to,
  title,
  subtitle,
  data,
}: SectionSliderProps) => {
  return (
    <section className={classNames(cls.sectionSlider, {}, [className])}>
      <div className={classNames(cls.container, {}, [])}>
        <Link to={to} className={classNames(cls.link, {}, [])}>
          <BlockTitle title={title} subtitle={subtitle} />
        </Link>
        <BlockSlider data={data} />
      </div>
    </section>
  );
};
