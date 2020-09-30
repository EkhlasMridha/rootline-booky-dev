import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
}
