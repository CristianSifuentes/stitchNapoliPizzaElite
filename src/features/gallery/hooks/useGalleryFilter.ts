import { useMemo, useState, useDeferredValue } from 'react';
import { GalleryPhoto } from '../types/galleryTypes';

export function useGalleryFilter(photos: GalleryPhoto[]) {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(
    () => photos.filter((photo) => photo.title.toLowerCase().includes(deferredQuery.toLowerCase())),
    [deferredQuery, photos],
  );

  return { query, setQuery, filtered };
}
