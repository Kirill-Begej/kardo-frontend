import { HeaderMain } from 'shared/ui/HeaderMain/ui/HeaderMain';
import { ProfileHobby } from 'widgets/Profile/ProfileHobby';
import { ProfileView } from 'widgets/Profile/ProfileView';
import { ProfileContent } from 'widgets/Profile/ProfileContent';
import { ProfileInfo } from 'widgets/Profile/ProfileInfo';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { PopupModal } from 'widgets/PopupModal';
import cls from './ProfilePage.module.css';

interface ProfileProrps {
  className?: string
}

const ProfilePage: FC<ProfileProrps> = ({ className }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const closePoppup = () => {
    setIsPopupOpen(null);
  };

  return (
    <div className={classNames(cls.profile, {}, [className])}>
      <div className={classNames(cls.block, {}, [])}>
        <HeaderMain to='/' name='Профиль' />
        <main className={classNames(cls.content, {}, [])}>
          <ProfileInfo />
          <ProfileHobby isOpen={handleOpenPopup} />
          <ProfileView />
          <ProfileContent />
          <PopupModal onClose={closePoppup} isOpen={isPopupOpen} />
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
