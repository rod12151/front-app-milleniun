import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuloResponse } from '../../models/response/modulo';
import baserUrl from '../auth/authHelper';
import { moduloCreateRequest } from '../../models/request/moduloRequest';

@Injectable({
  providedIn: 'root'
})
export class ModuloService {

  
  constructor(private http:HttpClient) { }

  public optenerModuloPorIdCurso(idCurso:number):Observable<ModuloResponse[]>{
    return this.http.get<ModuloResponse[]>(`${baserUrl}/modulo/public/modulo/moduloList?idCurso=${idCurso}`)
  }
  public crearModulo(request:moduloCreateRequest):Observable<ModuloResponse>{
    return this.http.post<ModuloResponse>(`${baserUrl}/modulo/create`,request)
  }
}
