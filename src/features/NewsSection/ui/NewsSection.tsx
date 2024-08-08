import { SectionSlider } from 'entities/SectionSlider';
import { newsSectionData } from 'features/NewsSection/model/newsSectionData';

export const NewsSection = () => {
  return (
    <SectionSlider to='#' content='inside' slideSize='normal' title='Новости' subtitle='Посмотреть все' data={newsSectionData} />
  );
};
