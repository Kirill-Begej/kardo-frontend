import { classNames } from 'shared/lib/classNames/classNames';
import { Banner } from 'entities/Banner';
import { Slider } from 'entities/Slider';
import { NewsSection } from 'features/NewsSection';
import { DirectionsSection } from 'features/DirectionsSection';
import { MembersSections } from 'features/MembersSections';
import { SectionLink } from 'entities/SectionLink';
import { BroadcastsSection } from 'features/BroadcastsSection';
import ExpectationsImage from 'shared/assets/images/Expectations/expectations.png';
import ExpertsImage from 'shared/assets/images/Experts/experts.png';
import cls from './Main.module.css';

interface MainProps {
  className?: string;
}

const Main = ({ className }: MainProps) => {
  return (
    <main className={classNames(cls.main, {}, [className])}>
      <div className={classNames(cls.content, {}, [])}>
        <Banner />
        <Slider />
        <NewsSection />
        <DirectionsSection />
        <MembersSections />
        <SectionLink title='Что вас ждет?' to='#' image={ExpectationsImage} />
        <BroadcastsSection />
        <SectionLink title='О наших экспертах' to='#' image={ExpertsImage} />
      </div>
      <div className={classNames(cls.indent, {}, [])}></div>
    </main>
  );
};

export default Main;
