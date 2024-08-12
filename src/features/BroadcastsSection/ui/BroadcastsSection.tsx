import { SectionSlider } from 'entities/SectionSlider';
import { broadcastsSectionData } from '../model/broadcastsSectionData';

export const BroadcastsSection = () => {
  return (
    <SectionSlider to='#' content='outside' slideSize='large' title='Трансляции' subtitle='Посмотреть все' video={true} data={broadcastsSectionData} />
  );
};
