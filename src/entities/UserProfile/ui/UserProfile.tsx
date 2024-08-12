import { classNames } from 'shared/lib/classNames/classNames';
import cls from './UserProfile.module.css';

interface UserProfileProps {
  className?: string;
  image: string;
  name: string;
  location: string;
  direction: string;
}

export const UserProfile = ({
  className,
  image,
  name,
  location,
  direction,
}: UserProfileProps) => {
  return (
    <section className={classNames(cls.userProfile, {}, [className])}>
      <div className={classNames(cls.container, {}, [])}>
        <div className={classNames(cls.imageWrap, {}, [])}>
          <div className={classNames(cls.imageContainer, {}, [])}>
            <img src={image} alt="#" className={classNames(cls.image, {}, [])} />
          </div>
        </div>
        <p className={classNames(cls.text, {}, [])}>
          <span className={classNames(cls.name, {}, [])}>{name}</span>
          <span className={classNames(cls.location, {}, [])}>{location}</span>
          <span className={classNames(cls.direction, {}, [])}>{direction}</span>
        </p>
      </div>
    </section>
  );
};
