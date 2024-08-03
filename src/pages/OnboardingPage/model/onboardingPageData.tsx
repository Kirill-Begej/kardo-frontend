interface IOnboardingPageData {
  image: string;
  title: string;
  subtitle: string;
}

export const onboardingPageData: IOnboardingPageData[] = [
  {
    image: `image-set(
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-1@1x.webp')}) type('image/webp') 1x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-1@2x.webp')}) type('image/webp') 2x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-1@1x.jpg')}) type('image/jpg') 1x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-1@2x.jpg')}) type('image/jpg') 2x
          )`,
    title: `Добро пожаловать в${'\u00A0'}КАРДО!`,
    subtitle: `Это ваше персональное приложение для${'\u00A0'}участия в конкурсах и взаимодействия с сообществом творческих людей`,
  },
  {
    image: `image-set(
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-2@1x.webp')}) type('image/webp') 1x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-2@2x.webp')}) type('image/webp') 2x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-2@1x.jpg')}) type('image/jpg') 1x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-2@2x.jpg')}) type('image/jpg') 2x
          )`,
    title: 'Участвуй в конкурсах',
    subtitle: 'В нашем приложении ты сможешь легко подать заявку и следить за результатами конкурсов',
  },
  {
    image: `image-set(
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-3@1x.webp')}) type('image/webp') 1x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-3@2x.webp')}) type('image/webp') 2x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-3@1x.jpg')}) type('image/jpg') 1x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-3@2x.jpg')}) type('image/jpg') 2x
          )`,
    title: 'Создай своё портфолио',
    subtitle: 'Добавляй фото и видео о своих достижениях. Смотри успехи других участников',
  },
  {
    image: `image-set(
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-4@1x.webp')}) type('image/webp') 1x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-4@2x.webp')}) type('image/webp') 2x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-4@1x.jpg')}) type('image/jpg') 1x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-4@2x.jpg')}) type('image/jpg') 2x
          )`,
    title: 'Будь в курсе',
    subtitle: `Узнавай первым о всех событиях и${'\u00A0'}жизни${'\u00A0'}КАРДО благодаря уведомлениям о новых конкурсах и изменениях в${'\u00A0'}расписании`,
  },
  {
    image: `image-set(
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-5@1x.webp')}) type('image/webp') 1x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-5@2x.webp')}) type('image/webp') 2x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-5@1x.jpg')}) type('image/jpg') 1x,
            url(${require('shared/assets/images/OnboardingPage/OnboardingPage-bg-5@2x.jpg')}) type('image/jpg') 2x
          )`,
    title: 'Готов начать?',
    subtitle: 'Зарегистрируйся сейчас и стань частью сообщества КАРДО!',
  },
];
