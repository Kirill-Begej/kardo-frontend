import { PlayIcon } from 'shared/ui/PlayIcon/PlayIcon';
import { Section } from 'shared/ui/Section/Section';
import { Titles } from 'shared/ui/Titles/Title';
import styles from './MainPage.module.css';
import { BlockSlider } from 'shared/ui/BlockSlider';

export const BroadCast = () => {
  return (
    <Section pixelPerfect={false}>
      <Titles link='/live' isLink={true} name='Трансляции' />
      <BlockSlider>
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
