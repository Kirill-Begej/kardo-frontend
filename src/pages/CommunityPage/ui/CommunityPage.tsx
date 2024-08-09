import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HeaderMain } from 'shared/ui/HeaderMain/ui/HeaderMain';
import { SearchFilter } from 'shared/ui/SearchFilter/SearchFilter';
import { PeopleSection } from 'widgets/Community/PeopleSection/PeopleSection';
import { PopupModal } from 'widgets/Community/PopupModal/PopupModal';
import cls from './CommunityPage.module.css';

interface CommunityPageProps {
  className?: string;
}

const CommunityPage: FC<CommunityPageProps> = ({ className }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(null);
  };

  return (
    <div className={classNames(cls.community, {}, [className])}>
      <div className={classNames(cls.container, {}, [])}>
        <HeaderMain isMainPage={false} isUserProfile={false} to='/' name='Комьюнити' />
        <main className={classNames(cls.content, {}, [])}>
        <section className={classNames(cls.section, {}, [])}>
          <div className={classNames(cls.mainContainer)}>
            <SearchFilter isOpen={handleOpenPopup} />
          </div>
        </section>
        <PeopleSection />
        <PopupModal isOpen={isPopupOpen} onClose={handleClosePopup} />
        </main>
      </div>
    </div>
  );
};

export default CommunityPage;
