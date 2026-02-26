import { create } from 'zustand';
import { BookingPayload } from '../types/bookingTypes';

type BookingState = {
  lastBookingId?: string;
  setLastBooking: (id: string) => void;
  draft: BookingPayload;
  setDraft: (next: Partial<BookingPayload>) => void;
};

export const useBookingStore = create<BookingState>((set) => ({
  lastBookingId: undefined,
  setLastBooking: (id) => set({ lastBookingId: id }),
  draft: { fullName: '', email: '', seats: 2 },
  setDraft: (next) => set((state) => ({ draft: { ...state.draft, ...next } })),
}));
