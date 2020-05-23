import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://52.91.139.190/fsapi/users/login';

  constructor(private httpClient: HttpClient) { }
  

  efetuaLogin(user: any){
    return this.httpClient.post(this.url,user);
  }
  public userLogado():boolean{
    let localStorageToken = localStorage.getItem('token');
    if(localStorageToken){
      return true;
    }else{
      return false;
    }
  }
}
