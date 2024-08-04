import styles from './ProfileContent.module.css';
import card from 'shared/assets/images/Profile/card.jpeg';
import Plus from 'shared/assets/images/icons/Plus.svg';
import { classNames } from 'shared/lib/classNames/classNames';

export const ProfileContent = () => {
  return (
    <section className={classNames(styles.content, {}, [])}>
      <div className={classNames(styles.container, {}, [])}>
        <ul className={classNames(styles.picker, {}, [])}>
          <li className={classNames(styles.pick, {}, [styles.pickActive])}>
            <p className={classNames(styles.text, {}, [styles.activeText])}>Все</p>
          </li>
          <li className={classNames(styles.pick, {}, [])}>
            <p className={classNames(styles.text, {}, [])}>Фото</p>
          </li>
          <li className={classNames(styles.pick, {}, [])}>
            <p className={classNames(styles.text, {}, [])}>Видео</p>
          </li>
        </ul>
        <ul className={classNames(styles.gallery, {}, [])}>
          <li className={classNames(styles.item, {}, [])}>
            <img className={classNames(styles.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(styles.item, {}, [])}>
            <img className={classNames(styles.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(styles.item, {}, [])}>
            <img className={classNames(styles.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(styles.item, {}, [])}>
            <img className={classNames(styles.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(styles.item, {}, [])}>
            <img className={classNames(styles.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(styles.item, {}, [])}>
            <img className={classNames(styles.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(styles.item, {}, [])}>
            <img className={classNames(styles.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(styles.addItem, {}, [])}>
            <Plus />
          </li>
        </ul>
      </div>
    </section>
  );
}