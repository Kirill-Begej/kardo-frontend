interface PeopleElementProps {
  id: number;
  heading: string;
  place: string;
  role: string;
}

export const peopleElement: PeopleElementProps[] = [
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
