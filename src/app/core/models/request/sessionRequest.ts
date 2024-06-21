export interface sessionCreateRequest{
    idModulo?:number,
    idDocente?:number,
    description?:String,
    material?:string,
    status?:boolean,
    inicioSession?:string,
    finalSession?:string
}