import { Injectable } from '@angular/core';
import { cursoAndDocentes, cursoResponse, tipoCurso } from '../../models/response/curso';
import { Observable } from 'rxjs';
import { paginationResponse, queryRequestCompleteCurso, queryRequestCurso } from '../../models/response/paginationResponse';
import { HttpClient } from '@angular/common/http';
import baserUrl from '../auth/authHelper';
import { cursoCreateRequest } from '../../models/request/cursoRequest';

@Injectable({
  providedIn: 'root'
})

export class CursoService {


  constructor(private http: HttpClient) { }

  public optenerListaCursosPaginado(query: queryRequestCurso): Observable<paginationResponse<cursoResponse>> {

    return this.http.get<paginationResponse<cursoResponse>>
      (`${baserUrl}/curso/public/listPage?type=${query.type}&name=${query.name}&page=${query.page}&size=${query.size}`)

  }
  public optenerListaCursosPaginadoAndStatus(query: queryRequestCompleteCurso): Observable<paginationResponse<cursoResponse>> {

    return this.http.get<paginationResponse<cursoResponse>>
      (`${baserUrl}/curso/listPage?type=${query.type}&name=${query.name}&page=${query.page}&size=${query.size}&status=${query.status}`)

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
  public curso(id:number):Observable<cursoResponse>{
    return this.http.get<cursoResponse>(`${baserUrl}/curso/curso/${id}`)
  }
  public crearCurso(data:cursoCreateRequest,idAdmin:number):Observable<cursoResponse>{
    return this.http.post<cursoResponse>(`${baserUrl}/curso/create?idAdmin=${idAdmin}`,data)
  }
}

