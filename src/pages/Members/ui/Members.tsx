import { Header } from 'shared/ui/Header';
import styles from './Members.module.css';
import { DropDown } from 'shared/ui/DropDown';

export const Members = () => {
  return (
    <div className={styles.members}>
      <section className={styles.container}>
        <main className={styles.content}>
          <Header name='Участники' />
          <section className={styles.dropDown}>
            <DropDown />
          </section>
        </main>
      </section>
    </div>
  );
};