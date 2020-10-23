import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BookingModel } from 'src/app/app-calender/models/booking.model';
import { GuestModel } from 'src/app/app-calender/models/guest.model';

@Injectable({
  providedIn: 'root',
})
export class DescriptionApiService {
  constructor(private http: HttpClient) {}

  getCustomer(id: number) {
    return this.http.get(`customer/${id}`).pipe(
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
    return this.http.put('customer', payload).pipe(retry(3));
  }

  updateBooking(payload: any, id: number) {
    return this.http.put(`booking/${id}`, payload).pipe(retry(3));
  }

  getGuestByBooking(id: number) {
    return this.http.get<Partial<GuestModel>[]>(`booking/guest/${id}`).pipe(retry(2));
  }
}
