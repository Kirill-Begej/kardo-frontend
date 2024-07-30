import { Header } from 'shared/ui/Header';
import styles from './Members.module.css';
import { MembersContent } from './MembersContent';

export const Members = () => {
  return (
    <div className={styles.members}>
      <section className={styles.container}>
        <Header name='Участник' />
        <MembersContent />
      </section>
    </div>
  );
};
