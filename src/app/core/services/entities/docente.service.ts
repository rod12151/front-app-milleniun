import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { docenteResponse } from '../../models/docente';
import baserUrl from '../auth/authHelper';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private http:HttpClient) { }
  public optenerDocentePorEmail(email:String):Observable<docenteResponse>{
    return this.http.get<docenteResponse>(`${baserUrl}/docente/docente/email?email=${email}`)
  }
}
