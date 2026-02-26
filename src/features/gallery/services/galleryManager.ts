import { galleryRepository } from './galleryRepository';

export const galleryManager = {
  async getPhotos() {
    const photos = await galleryRepository.listPhotos();
    return photos.sort((a, b) => a.title.localeCompare(b.title));
  },
};
