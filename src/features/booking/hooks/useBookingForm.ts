import { FormEvent, useTransition } from 'react';
import { bookingManager } from '../services/bookingManager';
import { useBookingStore } from './useBookingStore';

export function useBookingForm() {
  const [isPending, startTransition] = useTransition();
  const { draft, setDraft, setLastBooking, lastBookingId } = useBookingStore();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    startTransition(async () => {
      const created = await bookingManager.createBooking(draft);
      setLastBooking(created.id);
    });
  };

  return { draft, setDraft, onSubmit, isPending, lastBookingId };
}
