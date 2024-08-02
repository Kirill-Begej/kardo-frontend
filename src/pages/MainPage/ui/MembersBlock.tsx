import { Titles } from 'shared/ui/Titles/Title';
import { PlayIcon } from 'shared/ui/PlayIcon/PlayIcon';
import { BlockSlider } from 'shared/ui/BlockSlider';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './MainPage.module.css';

interface MembersBlockProps {
  className?: string;
}

export const MembersBlock: FC<MembersBlockProps> = ({ className }) => {
  return (
    <section className={classNames(styles.section, {}, [className])}>
      <article className={classNames(styles.mainContainer, {}, [])}>
      <Titles link='/members' isLink={true} name='Участники' />
      <BlockSlider>
        <div className={classNames(styles.player, {}, [className])}>
          <div className={classNames(styles.video, {}, [])}>
            <PlayIcon />
          </div>
          <p className={classNames(styles.subtitle, {}, [])}>Дмитрий Пономаренко</p>
        </div>
        <div className={classNames(styles.player, {}, [className])}>
          <div className={classNames(styles.video, {}, [])}>
            <PlayIcon />
          </div>
          <p className={classNames(styles.subtitle, {}, [])}>Дмитрий Пономаренко</p>
        </div>
        <div className={classNames(styles.player, {}, [className])}>
          <div className={classNames(styles.video, {}, [])}>
            <PlayIcon />
          </div>
          <p className={classNames(styles.subtitle, {}, [])}>Дмитрий Пономаренко</p>
        </div>
        <div className={classNames(styles.player, {}, [className])}>
          <div className={classNames(styles.video, {}, [])}>
            <PlayIcon />
          </div>
          <p className={classNames(styles.subtitle, {}, [])}>Дмитрий Пономаренко</p>
        </div>
        </BlockSlider>
        </article>
    </section>
  );
};
