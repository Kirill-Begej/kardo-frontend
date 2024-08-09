import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import avatar from 'shared/assets/images/av.jpeg';
import cls from './PeopleSection.module.css';
import { peopleElement } from './models/PeopleElement';

interface PeopleSectionProps {
  className?: string;
}

export const PeopleSection: FC<PeopleSectionProps> = ({ className }) => {
  return (
    <section className={classNames(cls.section, {}, [className])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <ul className={classNames(cls.list, {}, [])}>
          {peopleElement.map((el) => {
            return (
              <li key={el.id} className={classNames(cls.card, {}, [])}>
                <img src={avatar} className={classNames(cls.avatar, {}, [])} />
                <div className={classNames(cls.info, {}, [])}>
                  <h2 className={classNames(cls.name, {}, [])}>{el.heading}</h2>
                  <p className={classNames(cls.place, {}, [])}>{el.place}</p>
                  <p className={classNames(cls.place, {}, [])}>{el.role}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
