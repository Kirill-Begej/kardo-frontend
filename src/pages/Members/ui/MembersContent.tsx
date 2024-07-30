import { DropDown } from 'shared/ui/DropDown';
import { useState } from 'react';
import { VideoMember } from 'shared/ui/VideoMember';
import styles from './Members.module.css';

export const MembersContent = () => {
  const [openModule, setOpenModule] = useState(false);

  const handleOpenModule = () => {
    setOpenModule((prevState) => !prevState);
  };
  return (
    <main className={styles.content}>
      <section className={styles.dropDown}>
        <DropDown name='Направление' isOpen={openModule} onOpen={handleOpenModule} />
        <DropDown name='Конкурс' isOpen={openModule} onOpen={handleOpenModule} />
      </section>
      <section className={styles.mainContent}>
        <VideoMember />
        <VideoMember />
        <VideoMember />
        <VideoMember />
      </section>
    </main>
  );
};
