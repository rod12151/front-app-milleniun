import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionCompleteResponse, SessionResponse } from '../../models/response/session';
import baserUrl from '../auth/authHelper';
import { sessionCreateRequest } from '../../models/request/sessionRequest';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient) { }
  public optenerSessionesPorIdModulo(idModulo:number):Observable<SessionResponse[]>{
    return this.http.get<SessionResponse[]>(`${baserUrl}/session/public/listar?idModulo=${idModulo}`)
  }
  public optenerSessionesCompletasPorIdModulo(idModulo:number):Observable<SessionCompleteResponse[]>{
    return this.http.get<SessionCompleteResponse[]>(`${baserUrl}/session/listar?idModulo=${idModulo}`)
  }
  public crearSesion(request:sessionCreateRequest,idAdmin:number):Observable<SessionResponse>{
    return this.http.post<SessionResponse>(`${baserUrl}/session/create?idAdmin=${idAdmin}`,request)
  }
}
