import { ContentProfile } from 'entities/ContentProfile';
import { profileSectionData } from '../model/profileSectionData';

export const ProfileSection = () => {
  return (
    <ContentProfile data={profileSectionData} />
  );
};
