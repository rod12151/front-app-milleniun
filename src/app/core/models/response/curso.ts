import { docenteResponse } from "../docente";

export interface cursoResponse {
    id: number;
    nombre: String;
    tag:string
    precio:number
    tipoCurso: tipoCurso;
    detalle: String;
    fechaInicio: String;
    fechaFin: String;
    modalidad: String;
    duration: number;
    image:String
  }

export type tipoCurso ="DIPLOMADO"|"ESPECIALIZACION"|"ACTUALIZACION"
  
export interface cursoAndDocentes{
  curso:cursoResponse
  docentes:docenteResponse[]

}