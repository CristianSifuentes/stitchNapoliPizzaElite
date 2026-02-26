import { useQuery } from '@tanstack/react-query';
import { SectionTitle } from '../../../shared/components/SectionTitle';
import { galleryManager } from '../services/galleryManager';
import { useGalleryFilter } from '../hooks/useGalleryFilter';

export function GalleryPage() {
  const { data = [] } = useQuery({ queryKey: ['gallery'], queryFn: galleryManager.getPhotos });
  const { query, setQuery, filtered } = useGalleryFilter(data);

  return (
    <section className="container">
      <SectionTitle title="Gallery" subtitle="Search moments from our Napoli masterclass" />
      <input className="input" placeholder="Search a moment..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <div className="grid grid-3" style={{ marginTop: '1rem' }}>
        {filtered.map((photo) => (
          <article className="card" key={photo.id}>
            <img src={photo.url} alt={photo.title} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', borderRadius: 12 }} />
            <h3>{photo.title}</h3>
            <small style={{ color: 'var(--muted)' }}>#{photo.tag}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
