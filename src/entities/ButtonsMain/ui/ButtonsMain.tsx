import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonSetting } from 'shared/ui/ButtonSetting/ButtonSetting';
import cls from './ButtonsMain.module.css';

interface ButtonsMainProps {
  className?: string;
}

export const ButtonsMain = ({ className }: ButtonsMainProps) => {
  return (
    <section className={classNames(cls.buttonsMain, {}, [className])}>
      <div className={classNames(cls.container, {}, [])}>
        <ButtonSetting
          type='button'
          icon='note'
          text='Мои заявки'
          buttonBottom={true}
        />
        <ButtonSetting
          type='button'
          icon='calendar'
          text='Календарь'
          buttonTop={true}
        />
      </div>
    </section>
  );
};
