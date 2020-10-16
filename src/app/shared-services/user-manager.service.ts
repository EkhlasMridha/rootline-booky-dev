import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { TokenService } from './utilities/token.service';
import * as fg from "@fingerprintjs/fingerprintjs";

@Injectable({
  providedIn: 'root',
})
export class UserManagerService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  async signout() {
    let id = await this.getBrowserId();
    let header = new HttpHeaders({ "bfg": id });
    return this.http.delete('identity/signout',{headers:header}).pipe(
      retry(2),
      catchError((err) => {
        return throwError(err);
      }),
      tap((result) => {
        this.tokenService.removeToken();
        this.tokenService.removeBrowserId();
      })
    );
  }

  private async getBrowserId() {
    let agent = await fg.load();
    let data = await agent.get();

    return data.visitorId;
  }
}
