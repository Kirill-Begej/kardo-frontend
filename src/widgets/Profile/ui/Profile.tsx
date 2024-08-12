import { classNames } from 'shared/lib/classNames/classNames';
import { HeaderMain } from 'entities/HeaderMain';
import { UserProfileSection } from 'features/UserProfileSection';
import { ButtonsMain } from 'entities/ButtonsMain';
import { ProfileSection } from 'features/ProfileSection';
import cls from './Profile.module.css';

interface ProfileProps {
  className?: string;
}

const Profile = ({ className }: ProfileProps) => {
  return (
    <div className={classNames(cls.profile, {}, [className])}>
      <HeaderMain
        leftLinkIcon='bell'
        leftLinkTo='#'
        title='Профиль'
        rightLinkIcon='gear'
        rightLinkTo='#'
      />
      <main className={classNames(cls.main, {}, [])}>
        <UserProfileSection />
        <ButtonsMain />
        <ProfileSection />
      </main>
      <div className={classNames(cls.indent, {}, [])}></div>
    </div>
  );
};

export default Profile;
