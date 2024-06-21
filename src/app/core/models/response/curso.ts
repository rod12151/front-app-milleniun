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
    activo:boolean
  }

export type tipoCurso ="DIPLOMADO"|"ESPECIALIZACION"|"ACTUALIZACION"

export type modalidadCurso = "ONLINE"|"PRESENCIAL"|"MIXTO"

export  interface tipoValue{
  viewValue:string;
  value:string;
  

}
export  interface tipoValue2{
  viewValue:string;
  value:boolean;
  

}
export  interface numElements{
  viewValue:number;
  value:number;
  

}
  
export interface cursoAndDocentes{
  curso:cursoResponse
  docentes:docenteResponse[]

}
export interface datosAdicionales{
  tipeCurso:tipoCurso,
  titleSeccion:String,
  url:String,
}