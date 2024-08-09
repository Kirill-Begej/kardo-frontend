import { SectionSlider } from 'entities/SectionSlider';
import { membersSectionData } from '../model/membersSectionData';

export const MembersSections = () => {
  return (
    <SectionSlider to='#' content='outside' slideSize='large' title='Участники' subtitle='Посмотреть всеx' video={true} data={membersSectionData} />
  );
};
