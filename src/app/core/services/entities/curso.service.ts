import { Injectable } from '@angular/core';
import { cursoAndDocentes, cursoResponse, tipoCurso } from '../../models/response/curso';
import { Observable } from 'rxjs';
import { paginationResponse, queryRequestCurso } from '../../models/response/paginationResponse';
import { HttpClient } from '@angular/common/http';
import baserUrl from '../auth/authHelper';

@Injectable({
  providedIn: 'root'
})

export class CursoService {


  constructor(private http: HttpClient) { }

  public optenerListaCursosPaginado(query: queryRequestCurso): Observable<paginationResponse<cursoResponse>> {

    return this.http.get<paginationResponse<cursoResponse>>
      (`${baserUrl}/curso/public/listPage?type=${query.type}&name=${query.name}&page=${query.page}&size=${query.size}`)

  }

  public optenerListaCursoAndDocentePaginado(query: queryRequestCurso): Observable<paginationResponse<cursoAndDocentes>> {

    return this.http.get<paginationResponse<cursoAndDocentes>>
      (`${baserUrl}/curso/public/listPage/cursosAndDocentes?type=${query.type}&name=${query.name}&page=${query.page}&size=${query.size}`)

  }

  public optenerListCurasoAnddocenteAleatorio(type: tipoCurso): Observable<cursoAndDocentes[]> {
    return this.http.get<cursoAndDocentes[]>
      (`${baserUrl}/curso/public/listCursosAndDocentes?curso=${type}`)

  }
  public detalleCurso(id:number):Observable<cursoResponse>{
    return this.http.get<cursoResponse>(`${baserUrl}/curso/public/curso/${id}`)
  }
}

