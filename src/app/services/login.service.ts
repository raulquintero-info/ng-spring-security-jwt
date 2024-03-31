import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private httpClient: HttpClient) { }

  public login(user: any){
    console.log('post login', user)
    return this.httpClient.post(`${baseUrl}/api/auth/login`, user).pipe(
      tap((userData: any)=>{
        console.log('tap',userData);
      })
    )
  }


  public loginUser(token:any){
    console.log('setToken', token)
    localStorage.setItem('token', token);
  }

  public  isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    return  ((tokenStr == undefined || tokenStr == '' || tokenStr == null)) ? false : true;
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  public getToken(){
    console.log('obteniendo token',localStorage)
    return localStorage.getItem('token');
  }

  public setUser(user: any){
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null)
      return userStr;
    else
      // this.logout();
      return null;
  }

  public getUserRole(){
    let user: any = JSON.parse(this.getUser()!);
    // console.log('user', user.authorities[0].authority);
    if( user == undefined)
      return '';
    else
      return  user.authorities[0].authority;
  }

  public getCurrentUser(){
    return this.httpClient.get(`${baseUrl}/api/auth/current-user`);
  }


}
