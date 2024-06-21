import { Component, OnInit } from '@angular/core';
import { AdminListDocenteComponent } from "../../admin/admin-docente-components/admin-list-docente/admin-list-docente.component";
import { CursosListComponent } from "../cursos-list/cursos-list.component";
import { docenteResponse } from '../../../core/models/docente';

import { SliderPrimengComponent } from "../../../shared/components/slider-primeng/slider-primeng.component";
import { AvatarComponent } from "../../../shared/components/avatar/avatar.component";
import { cursoAndDocentes, cursoResponse, datosAdicionales } from '../../../core/models/response/curso';

import { CardCursoComponent } from "../../../shared/components/card-curso/card-curso.component";
import { SliderCursoPrimengComponent } from "../../../shared/components/slider-curso-primeng/slider-curso-primeng.component";
import { CursoService } from '../../../core/services/entities/curso.service';
@Component({
    selector: 'app-public-page',
    standalone: true,
    templateUrl: './public-page.component.html',
    styleUrl: './public-page.component.css',
    imports: [AdminListDocenteComponent, CursosListComponent, SliderPrimengComponent, AvatarComponent,  CardCursoComponent, SliderCursoPrimengComponent]
})
export class PublicPageComponent  implements OnInit{
 
constructor(private cursoService:CursoService){}
datosCursoActualizacion?:cursoAndDocentes[];
datosCursoDiplomado?:cursoAndDocentes[];
datosCursoEspecializacion?:cursoAndDocentes[];
ngOnInit(): void {
  this.CursoActualizacion()
  this.CursoDiplomado()
  this.CursoEspecializacion()
    
}

CursoActualizacion(){
  this.cursoService.optenerListCurasoAnddocenteAleatorio('ACTUALIZACION').subscribe({
    next:data=>{
      this.datosCursoActualizacion=data;
    },
    error:e=>{
      console.error(e)
    }
  })

}
CursoDiplomado(){
  this.cursoService.optenerListCurasoAnddocenteAleatorio('DIPLOMADO').subscribe({
    next:data=>{
      this.datosCursoDiplomado=data;
    },
    error:e=>{
      console.error(e)
    }
  })
  
}
CursoEspecializacion(){
  this.cursoService.optenerListCurasoAnddocenteAleatorio('ESPECIALIZACION').subscribe({
    next:data=>{
      this.datosCursoEspecializacion=data;
    },
    error:e=>{
      console.error(e)
    }
  })
  
}
 
datosAdicionalesActualizacion:datosAdicionales={
    titleSeccion:"NUESTROS MEJORS CURSOS DE ACTUALICACION",
    tipeCurso:'ACTUALIZACION',
    url:"actualizacion"

}
datosAdicionalesDiplomado:datosAdicionales={
    titleSeccion:"nuestros diplomados son elementales para su futuro profecional",
    tipeCurso:'DIPLOMADO',
    url:"diplomado"

}
datosAdicionalesEspecializacion:datosAdicionales={
    titleSeccion:"NUESTROS MEJORS CURSOS DE eSPECIALIZACION SON LO QUE BUSCABAS",
    tipeCurso:'ESPECIALIZACION',
    url:"especializacion"

}





  
  

}
