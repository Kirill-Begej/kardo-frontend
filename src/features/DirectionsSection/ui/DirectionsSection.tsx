import { SectionSlider } from 'entities/SectionSlider';
import { directionsSectionData } from 'features/DirectionsSection/model/directionsSectionData';

export const DirectionsSection = () => {
  return (
    <SectionSlider to='#' content='outside' slideSize='small' title='Направления' subtitle='Посмотреть все' video={false} data= {directionsSectionData} />
  );
};
