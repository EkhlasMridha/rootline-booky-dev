import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor(private http: HttpClient) {}

  isMailExists(mail: string) {
    return this.http.get(`customer/checkemail/${mail}`).pipe(
      debounceTime(400),
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
      debounceTime(400),
      map((exists: boolean) => {
        if (exists) {
          return { isExists: true };
        }

        return null;
      })
    );
  }
}
