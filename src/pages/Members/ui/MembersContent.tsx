import { DropDown } from 'shared/ui/DropDown';
import { VideoMember } from 'shared/ui/VideoMember';
import styles from './Members.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

interface MembersContentProps {
  className?: string;
}

export const MembersContent: FC<MembersContentProps> = ({ className }) => {
  return (
    <main className={classNames(styles.content, {}, [className])}>
      <section className={classNames(styles.section, {}, [])}>
        <article className={classNames(styles.mainContainer, {}, [])}>
          <DropDown />
          <DropDown />
        </article>
      </section>
      <section className={classNames(styles.section, {}, [])}>
        <article className={classNames(styles.mainContent, {}, [])}>
          <VideoMember to='/video' />
          <VideoMember to='/video' />
          <VideoMember to='/video' />
          <VideoMember to='/video' />
        </article>
      </section>
    </main>
  );
};
