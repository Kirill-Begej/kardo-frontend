import { HeaderMain } from 'shared/ui/HeaderMain';
import styles from './Members.module.css';
import { MembersContent } from './MembersContent';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

interface MembersProps {
  className?: string;
}
export const Members: FC<MembersProps> = ({ className }) => {
  return (
    <div className={classNames(styles.members, {}, [className])}>
      <section className={classNames(styles.container, {}, [])}>
        <HeaderMain to='' name='Участник' />
        <MembersContent />
      </section>
    </div>
  );
};
