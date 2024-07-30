import { Header } from 'shared/ui/Header';
import styles from './Members.module.css';
import { DropDown } from 'shared/ui/DropDown';
import { useState } from 'react';
import { VideoMember } from 'shared/ui/VideoMember';

export const Members = () => {
  const [openModule, setOpenModule] = useState(false);

  const handleOpenModule = () => {
    setOpenModule(prevState => !prevState);
  };
  return (
    <div className={styles.members}>
      <section className={styles.container}>
        <Header name='Участники' />
        <main className={styles.content}>
          <section className={styles.dropDown}>
            <DropDown name='Направление' isOpen={openModule} onOpen={handleOpenModule}  />
            <DropDown name='Конкурс' isOpen={openModule} onOpen={handleOpenModule} />
          </section>
          <section className={styles.mainContent}>
            <VideoMember />
            <VideoMember />
            <VideoMember />
            <VideoMember />
          </section>
        </main>
      </section>
    </div>
  );
};