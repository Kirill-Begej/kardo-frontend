import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import avatar from 'shared/assets/images/av.jpeg';
import cls from './PeopleSection.module.css';

const peapleElement: PeopleSectionProps[] = [
  {
    id: 1,
    heading: 'Арина Петрова',
    place: 'Россия, Москва',
    role: 'BMX [Участник]',
  },
  {
    id: 2,
    heading: 'Иван Смирнов',
    place: 'Россия, Санкт-Петербург',
    role: 'Паркур [Участник]',
  },
  {
    id: 3,
    heading: 'Кирилл Акиев',
    place: 'Россия, Элиста',
    role: 'Трюковой самокат [Участник]',
  },
  {
    id: 4,
    heading: 'Виктор Краснов',
    place: 'Россия, Москва',
    role: 'BMX [Участник]',
  },
  {
    id: 5,
    heading: 'Елизавета Маркова',
    place: 'Россия, Москва',
    role: 'Граффити',
  },
];
interface PeopleSectionProps {
  className?: string;
  id: number;
  heading: string;
  place: string;
  role: string;
}

export const PeopleSection: FC<PeopleSectionProps> = ({ className }) => {
  return (
    <section className={classNames(cls.section, {}, [className])}>
      <div className={classNames(cls.mainContainer, {}, [])}>
        <ul className={classNames(cls.list, {}, [])}>
          {peapleElement.map((el) => {
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
