export type TMembersSectionsData = {
  image: string;
  title: string;
};

export const membersSectionData: TMembersSectionsData[] = [
  {
    image: `${require('shared/assets/images/Members/members-1.jpg')}`,
    title: 'Дмитрий Пономаренко',
  },
  {
    image: `${require('shared/assets/images/Members/members-2.jpg')}`,
    title: 'Александр Захаров',
  },
  {
    image: `${require('shared/assets/images/Members/members-3.jpg')}`,
    title: 'Иван Иванов',
  },
  {
    image: `${require('shared/assets/images/Members/members-4.jpg')}`,
    title: 'Дмитрий Цветков',
  },
];
