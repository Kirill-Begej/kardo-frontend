import { UserProfile } from 'entities/UserProfile';
import { userProfileSectionData } from '../model/userProfileSectionData';

export const UserProfileSection = () => {
  return (
    <UserProfile
      image={userProfileSectionData.image}
      name={userProfileSectionData.name}
      location={userProfileSectionData.location}
      direction={userProfileSectionData.direction}
    />
  );
};
