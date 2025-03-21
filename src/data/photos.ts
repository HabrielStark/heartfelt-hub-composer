
import { Photo } from '@/types/photo';

// Sample photos with Unsplash placeholders
const photos: Photo[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'summerCamp',
    description: 'Kids playing at summer camp',
    date: '2023-07-15'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'schoolEvents',
    description: 'School performance day',
    date: '2023-05-20'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1602639105875-7cb5525a4a78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'specialCelebrations',
    description: 'Birthday celebration',
    date: '2023-09-10'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'summerCamp',
    description: 'Arts and crafts session',
    date: '2023-07-22'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'schoolEvents',
    description: 'Science fair project',
    date: '2023-04-15'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1602639105875-7cb5525a4a78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'specialCelebrations',
    description: 'Holiday celebration',
    date: '2022-12-25'
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'summerCamp',
    description: 'Group activities',
    date: '2023-06-30'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'schoolEvents',
    description: 'Computer class',
    date: '2023-03-12'
  },
  // Adding new diverse photos to make the website more alive
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'summerCamp',
    description: 'Nature exploration trip',
    date: '2023-07-05'
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'specialCelebrations',
    description: 'Cooking class for kids',
    date: '2023-08-14'
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'specialCelebrations',
    description: 'Animal therapy day',
    date: '2023-06-22'
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'summerCamp',
    description: 'Zoo adventure day',
    date: '2023-07-18'
  }
];

export { photos };

// For compatibility with existing imports
export const allPhotoCategories = [
  'allPhotos',
  'summerCamp',
  'schoolEvents',
  'specialCelebrations'
];

// For compatibility with existing imports
export const categorizedPhotos: Record<string, Photo[]> = {
  allPhotos: photos,
  summerCamp: photos.filter(photo => photo.category === 'summerCamp'),
  schoolEvents: photos.filter(photo => photo.category === 'schoolEvents'),
  specialCelebrations: photos.filter(photo => photo.category === 'specialCelebrations')
};
