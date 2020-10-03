import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'lodash';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { StateModel } from '../models/state.model';
import { BookedRoomModel } from '../models/booked-room.model';
import { BookingModel } from 'src/app/app-calender/models/booking.model';

@Injectable({
  providedIn: 'root',
})
export class DescriptionApiService {
  constructor(private http: HttpClient) {}

  getCustomer(id: number) {
    return this.http.get(`room/customer/${id}`).pipe(
      retry(2),
      catchError((err) => throwError(err))
    );
  }

  getAvailableStates() {
    return this.http.get('booking/states').pipe(
      retry(2),
      catchError((err) => throwError(err))
    );
  }

  deleteBookedRoom(booking: BookingModel) {
    return this.http.post('booking', booking).pipe(
      retry(2),
      catchError((err) => throwError(err))
    );
  }

  updateBookingState(payload: any) {
    return this.http.put('booking/updatestate', payload).pipe(
      retry(2),
      catchError((err) => throwError(err))
    );
  }

  updateCustomer(payload: any) {
    return this.http.put('customer', payload).pipe(
      retry(3),
      catchError((err) => throwError(err))
    );
  }

  updateBooking(payload: any) {
    return this.http.put('booking', payload).pipe(
      retry(3),
      catchError((err) => throwError(err))
    );
  }
}
