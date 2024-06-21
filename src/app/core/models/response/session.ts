import { docenteResponse } from "../docente"

export interface SessionResponse{
    numOrden:number,
    inicioSession:string,//ISO-8601 string
    finalSession:string,//ISO-8601 string
    duration:number,
    description:String,
    docente:docenteResponse
}
export interface SessionCompleteResponse{
    id:number,
    numOrden:number,
    inicioSession:string,//ISO-8601 string
    finalSession:string,//ISO-8601 string
    duration:number,
    description:String,
    docente:docenteResponse,
    material:string
}