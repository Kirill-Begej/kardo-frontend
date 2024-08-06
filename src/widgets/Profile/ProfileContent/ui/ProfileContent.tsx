import card from 'shared/assets/images/Profile/card.jpeg';
import Plus from 'shared/assets/images/icons/Plus.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileContent.module.css';

export const ProfileContent = () => {
  return (
    <section className={classNames(cls.content, {}, [])}>
      <div className={classNames(cls.container, {}, [])}>
        <ul className={classNames(cls.picker, {}, [])}>
          <li className={classNames(cls.pick, {}, [cls.pickActive])}>
            <p className={classNames(cls.text, {}, [cls.activeText])}>Все</p>
          </li>
          <li className={classNames(cls.pick, {}, [])}>
            <p className={classNames(cls.text, {}, [])}>Фото</p>
          </li>
          <li className={classNames(cls.pick, {}, [])}>
            <p className={classNames(cls.text, {}, [])}>Видео</p>
          </li>
        </ul>
        <ul className={classNames(cls.gallery, {}, [])}>
          <li className={classNames(cls.item, {}, [])}>
            <img className={classNames(cls.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(cls.item, {}, [])}>
            <img className={classNames(cls.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(cls.item, {}, [])}>
            <img className={classNames(cls.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(cls.item, {}, [])}>
            <img className={classNames(cls.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(cls.item, {}, [])}>
            <img className={classNames(cls.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(cls.item, {}, [])}>
            <img className={classNames(cls.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(cls.item, {}, [])}>
            <img className={classNames(cls.image, {}, [])} src={card} alt='Картинка' />
          </li>
          <li className={classNames(cls.addItem, {}, [])}>
            <Plus />
          </li>
        </ul>
      </div>
    </section>
  );
};
