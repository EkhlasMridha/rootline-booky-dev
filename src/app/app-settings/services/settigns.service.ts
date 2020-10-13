import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AdminModel } from '../models/admin.model';
import { ResetPassword } from '../models/reset.model';

@Injectable({
  providedIn: 'root'
})
export class SettignsService {

  constructor(private http:HttpClient) { }

  changeBexioToken(token:string){
    let admin = new AdminModel();
    admin.bexioToken=token;
    return this.http.post("identity/bexiotoken",admin).pipe(retry(3));
  }

  getProfile(){
    return this.http.get<AdminModel>("identity/profile").pipe(catchError(err=>throwError(err)));
  }

  resetPassword(payload:Partial<ResetPassword>){
    return this.http.post("identity/resetpassword",payload).pipe(retry(2));
  }
}
