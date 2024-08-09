export type TNewsSectionData = {
  image: string;
  title: string;
  subtitle: string;
  date: string;
};

export const newsSectionData: TNewsSectionData[] = [
  {
    image: `${require('shared/assets/images/News/news-1.jpg')}`,
    title: 'Региональный этап:',
    subtitle: 'Кировская область',
    date: '10 июля',
  },
  {
    image: `${require('shared/assets/images/News/news-2.jpg')}`,
    title: 'Национальный этап:',
    subtitle: 'Коста-Рика',
    date: '21 июня',
  },
];
