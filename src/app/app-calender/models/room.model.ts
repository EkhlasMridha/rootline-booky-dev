import { BookedModel } from './booked.model';
import { BookingModel } from './booking.model';

export interface RoomModel {
  bookedRooms: BookedModel[];
  id: number;
  capacity: number;
  roomname: string;
}
