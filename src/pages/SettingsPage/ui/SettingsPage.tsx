import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HeaderMain } from 'shared/ui/HeaderMain/ui/HeaderMain';
import { Confidentiality } from 'widgets/Settings/Confidentiality';
import { FeedBack } from 'widgets/Settings/FeedBack';
import { General } from 'widgets/Settings/General';
import { Notification } from 'widgets/Settings/Notification';
import { Safe } from 'widgets/Settings/Safe';
import { SignOut } from 'widgets/Settings/SignOut';
import { Support } from 'widgets/Settings/Support';
import styles from './SettingsPage.module.css';

const SettingsPage: FC = () => {
  return (
    <section className={classNames(styles.settings, {}, [])}>
      <div className={classNames(styles.block, {}, [])}>
        <HeaderMain to='/' name='Настройки' />
        <main className={styles.content}>
          <General />
          <Notification />
          <Confidentiality />
          <Safe />
          <Support />
          <FeedBack />
          <SignOut />
        </main>
      </div>
    </section>
  );
};

export default SettingsPage;
