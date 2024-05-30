import { Injectable } from '@angular/core';
import { cursoResponse } from '../../models/response/curso';
import { Observable } from 'rxjs';
import { paginationResponse, queryRequestCurso } from '../../models/response/paginationResponse';
import { HttpClient } from '@angular/common/http';
import baserUrl from '../auth/authHelper';

@Injectable({
  providedIn: 'root'
})

export class CursoService {
  

  constructor(private http:HttpClient) { }

  public optenerListaCursosPaginado(query:queryRequestCurso):Observable<paginationResponse<cursoResponse>>{
       
    return this.http.get<paginationResponse<cursoResponse>>
    (`${baserUrl}/curso/public/listPage?type=${query.type}&name=${query.name}&page=${query.page}&size=${query.size}`)
  
    }
}
