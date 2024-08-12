export type TProfileSectionData = {
  image: string;
  type: 'image' | 'video';
};

export const profileSectionData: TProfileSectionData[] = [
  {
    image: `${require('shared/assets/images/Profile/image-1.jpg')}`,
    type: 'image',
  },
  {
    image: `${require('shared/assets/images/Profile/image-2.jpg')}`,
    type: 'video',
  },
  {
    image: `${require('shared/assets/images/Profile/image-3.jpg')}`,
    type: 'image',
  },
  {
    image: `${require('shared/assets/images/Profile/image-4.jpg')}`,
    type: 'video',
  },
  {
    image: `${require('shared/assets/images/Profile/image-5.jpg')}`,
    type: 'image',
  },
  {
    image: `${require('shared/assets/images/Profile/image-6.jpg')}`,
    type: 'video',
  },
  {
    image: `${require('shared/assets/images/Profile/image-7.jpg')}`,
    type: 'image',
  },
];
