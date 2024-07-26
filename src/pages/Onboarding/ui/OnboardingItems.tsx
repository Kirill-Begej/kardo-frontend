import imagebg from '../../../shared/assets/images/Onboarding/photo_slide_1.jpg';
import imagebg2 from '../../../shared/assets/images/Onboarding/photo_slide_2.jpg';
import imagebg3 from '../../../shared/assets/images/Onboarding/photo_slide_3.jpg';
import imagebg4 from '../../../shared/assets/images/Onboarding/photo_slide_4.jpg';
import imagebg5 from '../../../shared/assets/images/Onboarding/photo_slide_5.jpg';

interface OnboardingProps {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
}

export const OnboadringItems: OnboardingProps[] = [
  {
    id: 1,
    image: imagebg,
    alt: 'test',
    title: `Добро пожаловать в${'\u00A0'}КАРДО!`,
    subtitle: `Это ваше персональное приложение для${'\u00A0'}участия в конкурсах и взаимодействия с сообществом творческих людей`,
  },
  {
    id: 2,
    image: imagebg2,
    alt: 'test',
    title: 'Участвуй в конкурсах',
    subtitle: 'В нашем приложении ты сможешь легко подать заявку и следить за результатами конкурсов',
  },
  {
    id: 3,
    image: imagebg3,
    alt: 'test',
    title: 'Создай своё портфолио',
    subtitle: 'Добавляй фото и видео о своих достижениях. Смотри успехи других участников',
  },
  {
    id: 4,
    image: imagebg4,
    alt: 'test',
    title: 'Будь в курсе',
    subtitle: `Узнавай первым о всех событиях и${'\u00A0'}жизни${'\u00A0'}КАРДО благодаря уведомлениям о новых конкурсах и изменениях в${'\u00A0'}расписании`,
  },
  {
    id: 5,
    image: imagebg5,
    alt: 'test',
    title: 'Готов начать?',
    subtitle: 'Зарегистрируйся сейчас и стань частью сообщества КАРДО!',
  },
];
