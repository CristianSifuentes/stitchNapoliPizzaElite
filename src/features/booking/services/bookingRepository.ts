import { BookingPayload } from '../types/bookingTypes';

export const bookingRepository = {
  async submit(payload: BookingPayload) {
    await new Promise((r) => setTimeout(r, 500));
    return { id: crypto.randomUUID(), ...payload, status: 'confirmed' as const };
  },
};
