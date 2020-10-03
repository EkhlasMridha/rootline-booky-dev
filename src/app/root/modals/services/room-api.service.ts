import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoomApiService {
  constructor(private http: HttpClient) {}

  createRoom(payload: any) {
    return this.http.post('room', payload).pipe(
      retry(3),
      catchError((err) => throwError(err))
    );
  }
}
