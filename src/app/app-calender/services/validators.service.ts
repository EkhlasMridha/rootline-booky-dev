import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor(private http: HttpClient) {}

  isMailExists(mail: string) {
    return this.http.get(`customer/checkemail/${mail}`).pipe(
      debounceTime(800),
      catchError((err) => throwError(err)),
      map((exists: boolean) => {
        if (exists) {
          return { isExists: true };
        }
        return null;
      })
    );
  }

  isPhoneExists(phone: string) {
    return this.http.get(`customer/checkphone/${phone}`).pipe(
      debounceTime(800),
      catchError((err) => throwError(err)),
      map((exists: boolean) => {
        if (exists) {
          return { isExists: true };
        }

        return null;
      })
    );
  }
}
