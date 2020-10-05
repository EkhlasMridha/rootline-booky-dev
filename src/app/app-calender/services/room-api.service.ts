import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, debounceTime, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoomApiService {
  constructor(private http: HttpClient) {}

  getAllRoomData() {
    return this.http.get<any[]>('room').pipe(retry(3));
  }

  createBooking(payload: any) {
    return this.http.post('booking/create', payload).pipe(retry(3));
  }

  createCustomer(payload: any) {
    return this.http.post('customer', payload).pipe(retry(3));
  }

  getAllStates() {
    return this.http.get<any[]>('booking/states').pipe(retry(3));
  }

  getCustomerByquery(query: string) {
    return this.http.get<any[]>(`customer?searchParam=${query}`).pipe(
      debounceTime(500),
      catchError((err) => throwError(err))
    );
  }
}
