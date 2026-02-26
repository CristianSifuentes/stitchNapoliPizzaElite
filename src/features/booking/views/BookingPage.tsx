import { useBookingForm } from '../hooks/useBookingForm';
import { SectionTitle } from '../../../shared/components/SectionTitle';

export function BookingPage() {
  const { draft, setDraft, onSubmit, isPending, lastBookingId } = useBookingForm();

  return (
    <section className="container">
      <SectionTitle title="Reserve your seat" subtitle="Protected route with guard + Zustand + transition" />
      <form onSubmit={onSubmit} className="card" style={{ maxWidth: 540, margin: '0 auto', display: 'grid', gap: '.8rem' }}>
        <input className="input" placeholder="Full name" value={draft.fullName} onChange={(e) => setDraft({ fullName: e.target.value })} />
        <input className="input" type="email" placeholder="Email" value={draft.email} onChange={(e) => setDraft({ email: e.target.value })} />
        <input className="input" type="number" min={1} max={8} value={draft.seats} onChange={(e) => setDraft({ seats: Number(e.target.value) })} />
        <button className="btn" disabled={isPending}>{isPending ? 'Submitting...' : 'Confirm booking'}</button>
        {lastBookingId ? <small>Booking confirmed #{lastBookingId.slice(0, 8)}</small> : null}
      </form>
    </section>
  );
}
