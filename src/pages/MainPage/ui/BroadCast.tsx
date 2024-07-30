import { PlayIcon } from 'shared/ui/PlayIcon/PlayIcon';
import { Section } from 'shared/ui/Section/Section';
import { Titles } from 'shared/ui/Titles/Title';
import styles from './MainPage.module.css';

export const BroadCast = () => {
  return (
    <Section pixelPerfect={false}>
      <Titles isLink={true} name='Трансляции' />
      <div className={styles.block}>
        <div className={styles.player}>
          <div className={styles.video}>
            <PlayIcon />
          </div>
          <p className={styles.subittle}>Дмитрий Пономаренко</p>
        </div>
      </div>
    </Section>
  );
};
