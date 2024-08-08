import { classNames } from 'shared/lib/classNames/classNames';
import { Banner } from 'entities/Banner';
import { Slider } from 'entities/Slider';
import { NewsSection } from 'features/NewsSection';
import { DirectionsSection } from 'features/DirectionsSection';
import cls from './Main.module.css';

interface MainProps {
  className?: string;
}

export const Main = ({ className }: MainProps) => {
  return (
    <main className={classNames(cls.main, {}, [className])}>
      <div className={classNames(cls.content, {}, [])}>
        <Banner />
        <Slider />
        <NewsSection />
        <DirectionsSection />
      </div>
      <div className={classNames(cls.indent, {}, [])}></div>
    </main>
  );
};
