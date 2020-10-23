import { GuestModel } from './guest.model';

export interface BookingModel {
  id: number;
  book_From: any;
  leave_At: any;
  state: any;
  stateId: number;
  amount: any;
  customerId: number;
  adults: number;
  children: number;
  booked_Date: any;
  bookedRoom?: any[];
  guest: Partial<GuestModel>[];
}
