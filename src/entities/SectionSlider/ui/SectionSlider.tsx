import { Link, To } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { BlockTitle } from 'shared/ui/BlockTitle/BlockTitle';
import { BlockSlider } from 'shared/ui/BlockSlider/BlockSlider';
import { TNewsSectionData } from 'features/NewsSection/model/newsSectionData';
import { TDirectionsSectionsData } from 'features/DirectionsSection/model/directionsSectionData';
import cls from './SectionSlider.module.css';

interface SectionSliderProps {
  className?: string;
  to: To;
  content: 'inside' | 'outside';
  title: string;
  subtitle: string;
  data: TNewsSectionData[] | TDirectionsSectionsData[];
  slideSize: 'small' | 'normal' | 'large';
}

export const SectionSlider = ({
  className,
  to,
  content,
  title,
  subtitle,
  slideSize,
  data,
}: SectionSliderProps) => {
  return (
    <section className={classNames(cls.sectionSlider, {}, [className])}>
      <div className={classNames(cls.container, {}, [])}>
        <Link to={to} className={classNames(cls.link, {}, [])}>
          <BlockTitle title={title} subtitle={subtitle} />
        </Link>
        <BlockSlider content={content} slideSize={slideSize} data={data} />
      </div>
    </section>
  );
};
