import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, debounceTime, retry } from 'rxjs/operators';
import { AppDataQuery } from '../models/data-get.model';
import { RoomModel } from '../models/room.model';
import { SearchCriteria } from '../models/search-criteria.model';

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

  getBexioCustomer(criteria: SearchCriteria[]) {
    return this.http.post<any[]>("customer/search",criteria).pipe(debounceTime(500),catchError(err=>throwError(err)))
  }

  updateRoom(payload:RoomModel){
    return this.http.put<RoomModel>("room",payload).pipe(retry(2));
  }

  deleteRoom(payload:RoomModel){
    return this.http.post("room/delete",payload).pipe(retry(3));
  }

  getRoomDataByMonth(date:AppDataQuery) {
    return this.http.post<any[]>("room/bymonth", date).pipe(retry(3));
  }
}
