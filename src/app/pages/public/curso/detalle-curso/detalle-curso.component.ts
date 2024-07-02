import { Component,  Input, OnInit, inject } from '@angular/core';
import { cursoResponse } from '../../../../core/models/response/curso';
import { CursoService } from '../../../../core/services/entities/curso.service';
import { Router } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import { ModuloService } from '../../../../core/services/entities/modulo.service';
import { ModuloResponse } from '../../../../core/models/response/modulo';
import { DateTimeService } from '../../../../core/services/helpers/date-time.service';
import { SessionService } from '../../../../core/services/entities/session.service';
import { SessionResponse } from '../../../../core/models/response/session';
import { AvatarComponent } from '../../../../shared/components/avatar/avatar.component';

@Component({
  selector: 'app-detalle-curso',
  standalone: true,
  imports: [MatExpansionModule,AvatarComponent],
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css'
})


export class DetalleCursoComponent implements OnInit{
  @Input() id?:number;
  datosCurso?:cursoResponse;
  datosModulo:ModuloResponse[]=[]
  

  private cursoServicio = inject(CursoService)
  private route =inject(Router)
  private moduloService=inject(ModuloService)
  private dateTime=inject(DateTimeService)
  private sesionService= inject(SessionService)
  sesiones: { [key: string]: SessionResponse[] } = {};
  

  ngOnInit(): void {
    this.detalleCurso();
    this.optenerModulos();
  }

  detalleCurso(){
    if(this.id!=undefined){

   
    this.cursoServicio.detalleCurso(this.id).subscribe({
      next:data=>{
        this.datosCurso=data;
      },
      error:e=>{
        console.error(e)
      }
    })
  }else{
    this.route.navigate([''])
  } }

  optenerModulos(){
    if(this.id!=undefined){
      this.moduloService.optenerModuloPorIdCurso(this.id).subscribe({
        next:data=>{
          this.datosModulo=data;
          console.log(this.datosModulo)
        },
        error:e=>{
          console.error(e)
        }
      })
    }
  }
  optenerSesiones(id:number){
    this.sesionService.optenerSessionesPorIdModulo(id).subscribe({
      next:data=>{
        this.sesiones[id]=data;
      }
    })

  }
  
  convertirFecha(date:string):{fecha:string,hora:string}{
   return  this.dateTime.extraterFechaHora(date)

  }
}
