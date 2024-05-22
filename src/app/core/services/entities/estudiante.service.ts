import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baserUrl from '../auth/authHelper';
import { estudianteResponse } from '../../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http:HttpClient) { }
  public optenerDocentePorEmail(email:String):Observable<estudianteResponse>{
    return this.http.get<estudianteResponse>(`${baserUrl}/estudiante/usuario/email?email=${email}`)
  }
}
