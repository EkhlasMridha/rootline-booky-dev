import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as fg from "@fingerprintjs/fingerprintjs";

export interface TokenModel {
  accessToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly accessToken: string = 'accessToken';
  private readonly refreshToken: string = 'refreshToken';
  private readonly bfg: string = "bfg";
  constructor(private jwtService: JwtHelperService, private http: HttpClient) {}

  storeToken(token: TokenModel) {
    localStorage.setItem(this.accessToken, token.accessToken);
    localStorage.setItem(this.refreshToken, token.refreshToken);
  }

  removeToken() {
    localStorage.removeItem(this.accessToken);
    localStorage.removeItem(this.refreshToken);
  }

  getToken(): TokenModel {
    let access = localStorage.getItem(this.accessToken);
    let refresh = localStorage.getItem(this.refreshToken);
    if (!(access && refresh)) {
      return null;
    }

    let token: TokenModel = {
      accessToken: access,
      refreshToken: refresh,
    };

    return token;
  }

  isTokenExpired(): boolean {
    let access = localStorage.getItem(this.accessToken);
    return this.jwtService.isTokenExpired(access);
  }

   refreshAccessToken() {
    let token = this.getToken();
    if (token == null) {
      return null;
    }
    let id = this.getBrowserIdFromStore();
    let header = new HttpHeaders({ "bfg": id });
    return this.http.post('identity/refresh', token,{headers:header});
  }

  hasToken() {
    if (this.getToken() == null) {
      return false;
    }

    return true;
  }

  async getBrowserId() {
    let agent = await fg.load();
    let data = await agent.get();

    return data.visitorId;
  }

  getBrowserIdFromStore() {
    let bfg = localStorage.getItem(this.bfg);
    return bfg;
  }

  saveBrowserId(id: string) {
    localStorage.setItem(this.bfg, id);
  }

  removeBrowserId() {
    localStorage.removeItem(this.bfg);
  }

  getTokenInfo() {
    let token = this.getToken();
    let info = this.jwtService.decodeToken(token.accessToken);
    return info;
  }
}
