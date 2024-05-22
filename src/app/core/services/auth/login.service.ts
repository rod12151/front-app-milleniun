import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { LoginResponse } from '../../models/response/loginResponse';
import { LoginRequest } from '../../models/request/loginRequest';
import baserUrl, { Roles, UserLogget } from './authHelper';
import { docenteResponse } from '../../models/docente';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly platformId = inject(PLATFORM_ID);

  constructor(private http: HttpClient) { }

  userActual: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  loginData: BehaviorSubject<LoginResponse> = new BehaviorSubject<LoginResponse>(
    {
      token: '',
      message: '',
      username: ''
    });
  login(credential: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${baserUrl}/auth/login`, credential).pipe(
      tap((loginRespose: LoginResponse) => {
        loginRespose['token']
      }),
      catchError(this.handlerError)
    )
  }
  private handlerError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producido un error', error.error);
    } else {
      console.error('Backend retornó el código de estado ', error.status, error.error);
    }
    return throwError(() => error.error.message);
  }
  //iniciamos sesion y agreagr token al localStorage
  public loginUser(token: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }

  }


  public isLoggedIn() {
    if (isPlatformBrowser(this.platformId)) {
      let tokenStorage = localStorage.getItem('token');
      if (tokenStorage == undefined || tokenStorage == '' || tokenStorage == null) {
        return false;
      } else {
        return true;
      }
    } else { return null }

  }
  //cerrar Sesion y eliminar token del localStorage

  public logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('user')
      localStorage.removeItem('roles')
      return true;
    } else { return null }
  }


  //optener token
  public getToken() {
    if (isPlatformBrowser(this.platformId)) {

      return localStorage.getItem('token');
    } else { return null }
  }

  public setUser(user: UserLogget) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('user', JSON.stringify(user));
    }

  }


  public getUser() {
    if (isPlatformBrowser(this.platformId)) {
      let userStr = localStorage.getItem('user');
      if (userStr != null) {
        return JSON.parse(userStr);
      } else {
        //this.logout();
        return null;
      }
    }

  }
  public optenerUsuarioActual(user: any) {
    if (user != undefined && user != null) {
      console.log(user)
      this.userActual.next(user);
      this.setUser(user);
    }

  }



  public setRole(roles: Roles) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('roles', JSON.stringify(roles));
    }

  }
  public getRole() {
    if (isPlatformBrowser(this.platformId)) {
      let roleaux = localStorage.getItem('roles');
      if (roleaux != null) {
        let role = JSON.parse(roleaux)
        return role;

      }
      return null;
    }

  }


}


