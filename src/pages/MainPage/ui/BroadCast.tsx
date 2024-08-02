import { PlayIcon } from 'shared/ui/PlayIcon/PlayIcon';
import { Titles } from 'shared/ui/Titles/Title';
import { BlockSlider } from 'shared/ui/BlockSlider';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './MainPage.module.css';

interface BroadCastProps {
  className?: string;
}

export const BroadCast: FC<BroadCastProps> = ({ className }) => {
  return (
    <section className={classNames(styles.section, {}, [className])}>
      <article className={classNames(styles.mainContainer, {}, [className])}>
      <Titles link='/live' isLink={true} name='Трансляции' />
      <BlockSlider>
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
