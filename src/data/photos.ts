import { Photo } from '@/types/photo';

// Photos from public directory
const photos: Photo[] = [
  {
    id: '1',
    src: '/IMG_4371.PNG',
    category: 'summerCamp',
    description: 'Kids playing at summer camp',
    date: '2023-07-15'
  },
  {
    id: '2',
    src: '/IMG_4372.PNG',
    category: 'schoolEvents',
    description: 'School performance day',
    date: '2023-05-20'
  },
  {
    id: '3',
    src: '/IMG_4373.PNG',
    category: 'specialCelebrations',
    description: 'Birthday celebration',
    date: '2023-09-10'
  },
  {
    id: '4',
    src: '/IMG_4367.PNG',
    category: 'summerCamp',
    description: 'Arts and crafts session',
    date: '2023-07-22'
  },
  {
    id: '5',
    src: '/IMG_4368.PNG',
    category: 'schoolEvents',
    description: 'Science fair project',
    date: '2023-04-15'
  },
  {
    id: '6',
    src: '/IMG_4370.PNG',
    category: 'specialCelebrations',
    description: 'Holiday celebration',
    date: '2022-12-25'
  },
  {
    id: '7',
    src: '/IMG_4369.PNG',
    category: 'summerCamp',
    description: 'Group activities',
    date: '2023-06-30'
  },
  {
    id: '8',
    src: '/IMG_4374.JPG',
    category: 'schoolEvents',
    description: 'Computer class for children',
    date: '2023-03-12'
  },
  {
    id: '9',
    src: '/IMG_4377.JPG',
    category: 'summerCamp',
    description: 'Nature exploration trip',
    date: '2023-07-05'
  },
  {
    id: '10',
    src: '/IMG_4378.JPG',
    category: 'specialCelebrations',
    description: 'Cooking class for kids',
    date: '2023-08-14'
  },
  {
    id: '11',
    src: '/IMG_4383.JPG',
    category: 'specialCelebrations',
    description: 'Kids making heart shapes',
    date: '2023-02-14'
  },
  {
    id: '12',
    src: '/IMG_4384.JPG',
    category: 'summerCamp',
    description: 'Swimming lessons at camp',
    date: '2023-07-18'
  },
  {
    id: '13',
    src: '/IMG_4385.JPG',
    category: 'schoolEvents',
    description: 'Music class for children',
    date: '2023-04-22'
  },
  {
    id: '14',
    src: '/IMG_4388.JPG',
    category: 'specialCelebrations',
    description: 'Holiday craft activities',
    date: '2022-12-18'
  },
  {
    id: '15',
    src: '/IMG_4389.JPG',
    category: 'summerCamp',
    description: 'Outdoor games at summer camp',
    date: '2023-07-25'
  },
  {
    id: '16',
    src: '/IMG_4394.JPG',
    category: 'schoolEvents',
    description: 'Children learning together',
    date: '2023-05-05'
  },
  {
    id: '17',
    src: '/IMG_4395.JPG',
    category: 'specialCelebrations',
    description: 'Birthday party fun',
    date: '2023-10-12'
  },
  {
    id: '18',
    src: '/IMG_4396.JPG',
    category: 'summerCamp',
    description: 'Kids hiking trip',
    date: '2023-06-08'
  },
  {
    id: '19',
    src: '/IMG_4397.JPG',
    category: 'schoolEvents',
    description: 'Children reading books',
    date: '2023-04-10'
  },
  {
    id: '20',
    src: '/IMG_4398.JPG',
    category: 'specialCelebrations',
    description: 'Talent show performance',
    date: '2023-11-15'
  },
  {
    id: '21',
    src: '/IMG_4399.JPG',
    category: 'summerCamp',
    description: 'Sport activities in the park',
    date: '2023-07-30'
  },
  {
    id: '22',
    src: '/IMG_4400.JPG',
    category: 'schoolEvents',
    description: 'Art class creativity',
    date: '2023-03-25'
  },
  {
    id: '23',
    src: '/IMG_4401.JPG',
    category: 'specialCelebrations',
    description: 'New Year celebration',
    date: '2022-12-31'
  },
  {
    id: '24',
    src: '/IMG_4402.JPG',
    category: 'summerCamp',
    description: 'Teambuilding activities',
    date: '2023-06-15'
  },
  {
    id: '25',
    src: '/IMG_4403.PNG',
    category: 'schoolEvents',
    description: 'Mathematics lesson',
    date: '2023-02-28'
  },
  {
    id: '26',
    src: '/IMG_4404.PNG',
    category: 'specialCelebrations',
    description: 'Graduation ceremony',
    date: '2023-05-30'
  },
  {
    id: '27',
    src: '/IMG_4405.PNG',
    category: 'summerCamp',
    description: 'Outdoor adventure',
    date: '2023-07-10'
  },
  {
    id: '33',
    src: '/IMG_4414.JPG',
    category: 'summerCamp',
    description: 'Beachside activities',
    date: '2023-08-05'
  },
  {
    id: '34',
    src: '/IMG_4415.JPG',
    category: 'schoolEvents',
    description: 'Group project presentation',
    date: '2023-05-10'
  },
  {
    id: '35',
    src: '/IMG_4416.JPG',
    category: 'specialCelebrations',
    description: 'Autumn festival',
    date: '2023-10-05'
  },
  {
    id: '36',
    src: '/IMG_4417.JPG',
    category: 'summerCamp',
    description: 'Camping under the stars',
    date: '2023-07-12'
  },
  {
    id: '38',
    src: '/IMG_4419.JPG',
    category: 'specialCelebrations',
    description: 'Sports day event',
    date: '2023-09-20'
  },

  {
    id: '39',
    src: '/IMG_4420 (2).JPG',
    category: 'specialCelebrations',
    description: 'Community gathering',
    date: '2023-11-01'
  }
];

export { photos };

// Export categories for filtering
export const allPhotoCategories = [
  'allPhotos',
  'summerCamp',
  'schoolEvents',
  'specialCelebrations'
];

// Export categorized photos
export const categorizedPhotos: Record<string, Photo[]> = {
  allPhotos: photos,
  summerCamp: photos.filter(photo => photo.category === 'summerCamp'),
  schoolEvents: photos.filter(photo => photo.category === 'schoolEvents'),
  specialCelebrations: photos.filter(photo => photo.category === 'specialCelebrations')
};
