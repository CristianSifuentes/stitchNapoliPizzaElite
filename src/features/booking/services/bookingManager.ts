import { bookingRepository } from './bookingRepository';
import { BookingPayload } from '../types/bookingTypes';

export const bookingManager = {
  async createBooking(payload: BookingPayload) {
    if (payload.seats < 1 || payload.seats > 8) {
      throw new Error('Seats should be between 1 and 8');
    }
    return bookingRepository.submit(payload);
  },
};
