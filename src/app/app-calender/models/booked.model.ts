import { BookingModel } from './booking.model';

export interface BookedModel {
  booking: BookingModel;
  bookingId: number;
  roomId: number;
}
