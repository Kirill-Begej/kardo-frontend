import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HeaderMain } from 'shared/ui/HeaderMain/ui/HeaderMain';
import { AccountAvatar } from 'widgets/Account/AccountAvatar';
import { Picker } from 'widgets/Account/Picker';
import { Form } from 'widgets/Account/Form/Form';
import cls from './AccountSettingsPage.module.css';

interface AccountSettingsProrps {
  className?: string
}

const AccountSettingsPage: FC<AccountSettingsProrps> = ({ className }) => {
  const [activeForm, setActiveForm] = useState(0);

  const handleChangeForm = (index: number) => {
    setActiveForm(index);
  };

  const renderForm = () => {
    switch (activeForm) {
      case 0:
        return <Form type='general' />;
      case 1:
        return <Form type='contacts' />;
      case 2:
        return <Form type='place' />;
      case 3:
        return <Form type='others' />;
      default:
        return <Form type='general' />;
    }
  };

  return (
    <div className={classNames(cls.profile, {}, [className])}>
      <div className={classNames(cls.block, {}, [])}>
        <HeaderMain to='/' name='Аккаунт' />
        <main className={classNames(cls.content, {}, [])}>
          <AccountAvatar />
          <Picker onPick={handleChangeForm} />
          <section className={classNames(cls.section, {}, [])}>
            <div className={classNames(cls.mainContainer, {}, [])}>
              {renderForm()}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
