import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap, retry, catchError } from 'rxjs/operators';
import {
  TokenService,
  TokenModel,
} from 'src/app/shared-services/utilities/token.service';
import { throwError, of } from 'rxjs';
import { Router } from '@angular/router';
import * as fg from "@fingerprintjs/fingerprintjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) {}

  async signin(payload: any) {
    let id = await this.getFingerPrintId();
    let header = new HttpHeaders({ "bfg": id });
    return this.http.post<TokenModel>('identity/signin', payload,{headers:header}).pipe(
      retry(3),
      tap((res) => {
        this.tokenService.storeToken(res);
        this.router.navigate(['']);
      })
    );
  }

  resetRequest(userIdentity: string) {
    let email = null;
    let username = null;
    let isEmail = userIdentity.search(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    let queryParams = new HttpParams();

    if (isEmail == 0) {
      email = userIdentity;
      queryParams = queryParams.append('Email', email);
    } else {
      username = userIdentity;
      queryParams = queryParams.append('UserName', username);
    }

    return this.http
      .get('identity/reset_request', { params: queryParams })
      .pipe(
        retry(3),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  resetPassword(payload: any) {
    return this.http.post(`identity/reset_password`, payload).pipe(
      retry(3),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  private async getFingerPrintId():Promise<string> {
    let agent = await fg.load();
    let data = await agent.get();

    let id: string = data.visitorId;
    
    return id;
  }
}
