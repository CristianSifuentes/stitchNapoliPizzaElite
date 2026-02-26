import { useHomeData } from '../hooks/useHomeData';
import { SectionTitle } from '../../../shared/components/SectionTitle';

export function HomePage() {
  const { data } = useHomeData();

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 style={{ fontSize: '4rem', maxWidth: 800, margin: '0 auto 1rem' }}>Master the Art of Neapolitan Pizza</h1>
          <p style={{ maxWidth: 700, margin: '0 auto 1.4rem', fontSize: '1.15rem', opacity: 0.92 }}>
            Join our once-a-year class in Naples and learn advanced craft methods from professionals.
          </p>
          <button className="btn">Book Your Spot</button>
        </div>
      </section>

      <section className="container">
        <SectionTitle title="What You'll Learn" />
        <div className="grid grid-3">
          {data?.learningItems.map((item) => (
            <article className="card" key={item.title}>
              <div style={{ fontSize: '1.8rem' }}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p style={{ color: 'var(--muted)' }}>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container">
        <SectionTitle title="Voices of Our Pizzeria Pros" />
        <div className="grid grid-3">
          {data?.testimonials.map((item) => (
            <article className="card" key={item.name}>
              <strong>{item.name}</strong>
              <p style={{ color: 'var(--muted)', margin: '.2rem 0' }}>{item.year}</p>
              <p style={{ color: '#ce5316' }}>{'★'.repeat(Math.floor(item.stars))}</p>
              <p>{item.quote}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
