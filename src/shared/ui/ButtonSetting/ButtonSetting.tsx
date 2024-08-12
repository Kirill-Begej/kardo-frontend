import { classNames } from 'shared/lib/classNames/classNames';
import NoteIcon from 'shared/assets/images/icons/ButtonSetting_icon/note_icon.svg';
import CalendarIcon from 'shared/assets/images/icons/ButtonSetting_icon/calendar_icon.svg';
import ArrowIcon from 'shared/assets/images/icons/ButtonSetting_icon/arrow_icon.svg';
import { Button } from 'shared/ui/Button/Button';
import cls from './ButtonSetting.module.css';

interface ButtonSettingProps {
  className?: string;
  type: 'button' | 'reset' | 'submit';
  icon?: 'note' | 'calendar';
  text: string;
  buttonBottom?: boolean;
  buttonTop?: boolean;
}

export const ButtonSetting = ({
  className,
  type,
  icon,
  text,
  buttonBottom,
  buttonTop,
}: ButtonSettingProps) => {
  return (
    <Button type={type} className={classNames(cls.buttonSetting, {
      [cls.buttonBorderRadiusTopLeftAndRight]: buttonBottom,
      [cls.buttonBorderRadiusBottomLeftAndRight]: buttonTop,
    }, [className])}>
      <div className={classNames(cls.iconWrap, {
        [cls.iconPresent]: icon,
      }, [])}>
        {icon === 'note' && <NoteIcon className={classNames(cls.icon, {}, [])} />}
        {icon === 'calendar' && <CalendarIcon className={classNames(cls.icon, {}, [])} />}
      </div>
      <div className={classNames(cls.button, {
        [cls.buttonWithIcon]: icon,
        [cls.buttonSeparator]: buttonBottom,
      }, [])}>
        <span className={classNames(cls.text, {}, [])}>{text}</span>
        <ArrowIcon className={classNames(cls.iconArrow, {}, [])} />
      </div>
    </Button>
  );
};
