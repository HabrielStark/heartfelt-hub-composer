
import { Photo } from '@/types/photo';

// Categories for the photos
export const allPhotoCategories = [
  'allPhotos',
  'summerCamp',
  'schoolEvents',
  'specialCelebrations'
];

// Sample placeholder photos - you can replace these with your actual 38 photos
const photos: Photo[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'summerCamp',
    description: 'Kids playing at summer camp',
    date: '2023-07-15'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'schoolEvents',
    description: 'School performance day',
    date: '2023-05-20'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1602639105875-7cb5525a4a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'specialCelebrations',
    description: 'Birthday celebration',
    date: '2023-09-10'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'summerCamp',
    description: 'Arts and crafts session',
    date: '2023-07-22'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'schoolEvents',
    description: 'Science fair project',
    date: '2023-04-15'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1602639105875-7cb5525a4a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'specialCelebrations',
    description: 'Holiday celebration',
    date: '2022-12-25'
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'summerCamp',
    description: 'Group activities',
    date: '2023-06-30'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'schoolEvents',
    description: 'Computer class',
    date: '2023-03-12'
  }
];

// Create a categorized mapping of photos
export const categorizedPhotos: Record<string, Photo[]> = {
  allPhotos: photos,
  summerCamp: photos.filter(photo => photo.category === 'summerCamp'),
  schoolEvents: photos.filter(photo => photo.category === 'schoolEvents'),
  specialCelebrations: photos.filter(photo => photo.category === 'specialCelebrations')
};
