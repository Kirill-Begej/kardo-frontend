import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavbarContent } from 'shared/ui/NavbarContent/NavbarContent';
import { Content } from 'shared/ui/Content/Content';
import { TProfileSectionData } from 'features/ProfileSection/model/profileSectionData';
import cls from './ContentProfile.module.css';

interface ContentProfileProps {
  className?: string;
  data: TProfileSectionData[];
}

export const ContentProfile = ({ className, data }: ContentProfileProps) => {
  const [filter, setFilter] = useState('Все');

  return (
    <section className={classNames(cls.contentProfile, {}, [className])}>
      <div className={classNames(cls.container, {}, [])}>
        <NavbarContent titles={['Все', 'Фото', 'Видео']} setFilter={setFilter} />
        <Content data={data} filter={filter} />
      </div>
    </section>
  );
};
