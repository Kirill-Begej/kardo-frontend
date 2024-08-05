import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HeaderMain } from 'shared/ui/HeaderMain/ui/HeaderMain';
import { AccountAvatar } from 'widgets/Account/AccountAvatar';
import { Picker } from 'widgets/Account/Picker';
import styles from './AccountSettingsPage.module.css';

interface AccountSettingsProrps {
  className?: string
}

const AccountSettingsPage: FC<AccountSettingsProrps> = ({ className }) => {
  return (
    <div className={classNames(styles.profile, {}, [className])}>
      <div className={classNames(styles.block, {}, [])}>
        <HeaderMain to='/' name='Аккаунт' />
        <main className={classNames(styles.content, {}, [])}>
          <AccountAvatar />
          <Picker />
        </main>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
