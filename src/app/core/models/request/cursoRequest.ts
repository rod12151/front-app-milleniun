import { modalidadCurso, tipoCurso } from "../response/curso";

export interface cursoCreateRequest{
    nombre:String,
    tipoCurso:tipoCurso,
    detalle:String,
    modalidadCurso:modalidadCurso,
    activo:Boolean,
    image:String,
    precio:number
}