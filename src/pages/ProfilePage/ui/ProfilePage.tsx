import { HeaderMain } from 'shared/ui/HeaderMain/ui/HeaderMain';
import { ProfileHobby } from 'widgets/Profile/ProfileHobby';
import { ProfileView } from 'widgets/Profile/ProfileView';
import { ProfileContent } from 'widgets/Profile/ProfileContent';
import { ProfileInfo } from 'widgets/Profile/ProfileInfo';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './ProfilePage.module.css';

interface ProfileProrps {
  className?: string
}

const ProfilePage: FC<ProfileProrps> = ({ className }) => {
  return (
    <div className={classNames(cls.profile, {}, [className])}>
      <div className={classNames(cls.block, {}, [])}>
        <HeaderMain to='/' name='Профиль' />
        <main className={classNames(cls.content, {}, [])}>
          <ProfileInfo />
          <ProfileHobby />
          <ProfileView />
          <ProfileContent />
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
