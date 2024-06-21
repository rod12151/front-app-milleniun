import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { docenteResponse } from '../../models/docente';
import baserUrl from '../auth/authHelper';
import { docenteCreateRequest } from '../../models/request/docenteRequest';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http:HttpClient) { }
  public optenerDocentePorEmail(email:String):Observable<docenteResponse>{
    return this.http.get<docenteResponse>(`${baserUrl}/docente/docente/email?email=${email}`)
  }

  public guardarDocente(request:docenteCreateRequest):Observable<docenteResponse>{
    return this.http.post<docenteResponse>(`${baserUrl}/docente/create`,request)
  }
  public optenerListaDocentes():Observable<docenteResponse[]>{
    return this.http.get<docenteResponse[]>(`${baserUrl}/docente/list`)
  }
  public optenerDocentePorID(id:number):Observable<docenteResponse>{
    return this.http.get<docenteResponse>(`${baserUrl}/deocente/public/docente/${id}`)

  }
  public optenerDocentePorName(name:string):Observable<docenteResponse[]>{
    return this.http.get<docenteResponse[]>(`${baserUrl}/docente/docente/name?nombre=${name}`)
  }
}
