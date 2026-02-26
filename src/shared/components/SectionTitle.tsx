export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '.5rem' }}>{title}</h2>
      {subtitle ? <p style={{ color: 'var(--muted)' }}>{subtitle}</p> : null}
    </div>
  );
}
