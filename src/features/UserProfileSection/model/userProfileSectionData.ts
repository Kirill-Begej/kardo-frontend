interface IUserProfileSectionData {
  image: string;
  name: string;
  location: string;
  direction: string;
}

export const userProfileSectionData: IUserProfileSectionData = {
  image: `${require('shared/assets/images/UserSection//user.jpg')}`,
  name: 'Василий Петров',
  location: 'Россия, Москва',
  direction: 'BMX [Участник]',
};
