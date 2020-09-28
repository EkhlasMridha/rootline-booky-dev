import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
}
