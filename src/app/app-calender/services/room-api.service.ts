import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounce } from 'lodash';
import { throwError } from 'rxjs';
import { catchError, debounceTime, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoomApiService {
  constructor(private http: HttpClient) {}

  getAllRoomData() {
    return this.http.get<any[]>('room').pipe(
      retry(3),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  createBookingWithCustomer(payload: any) {
    return this.http.post('booking/withcustomer', payload).pipe(
      retry(3),
      catchError((err) => catchError(err))
    );
  }

  getAllStates() {
    return this.http.get<any[]>('booking/states').pipe(
      retry(3),
      catchError((err) => throwError(err))
    );
  }

  getCustomerByquery(query: string) {
    return this.http.get<any[]>(`customer?searchParam=${query}`).pipe(
      debounceTime(1000),
      catchError((err) => throwError(err))
    );
  }
}
