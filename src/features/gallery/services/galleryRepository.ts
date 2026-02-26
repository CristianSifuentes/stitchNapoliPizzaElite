import { GalleryPhoto } from '../types/galleryTypes';

const photos: GalleryPhoto[] = [
  { id: '1', title: 'Fermented Dough', tag: 'dough', url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80' },
  { id: '2', title: 'Wood-fired Oven', tag: 'oven', url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80' },
  { id: '3', title: 'Hands-on Class', tag: 'class', url: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80' },
  { id: '4', title: 'Advanced Topping', tag: 'class', url: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80' },
];

export const galleryRepository = {
  async listPhotos() {
    return Promise.resolve(photos);
  },
};
