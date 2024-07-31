import { Section } from 'shared/ui/Section/Section';
import { Titles } from 'shared/ui/Titles/Title';
import { PlayIcon } from 'shared/ui/PlayIcon/PlayIcon';
import styles from './MainPage.module.css';
import { BlockSlider } from 'shared/ui/BlockSlider';

export const MembersBlock = () => {
  return (
    <Section pixelPerfect={true}>
      <Titles link='/members' isLink={true} name='Участники' />
      <BlockSlider>
        <div className={styles.player}>
          <div className={styles.video}>
            <PlayIcon />
          </div>
          <p className={styles.subittle}>Дмитрий Пономаренко</p>
        </div>
        <div className={styles.player}>
          <div className={styles.video}>
            <PlayIcon />
          </div>
          <p className={styles.subittle}>Дмитрий Пономаренко</p>
        </div>
        <div className={styles.player}>
          <div className={styles.video}>
            <PlayIcon />
          </div>
          <p className={styles.subittle}>Дмитрий Пономаренко</p>
        </div>
        <div className={styles.player}>
          <div className={styles.video}>
            <PlayIcon />
          </div>
          <p className={styles.subittle}>Дмитрий Пономаренко</p>
        </div>
        </BlockSlider>
    </Section>
  );
};
