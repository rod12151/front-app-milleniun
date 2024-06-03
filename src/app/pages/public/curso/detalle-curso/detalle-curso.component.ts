import { Component, Input, OnInit, inject } from '@angular/core';
import { cursoResponse } from '../../../../core/models/response/curso';
import { CursoService } from '../../../../core/services/entities/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-curso',
  standalone: true,
  imports: [],
  templateUrl: './detalle-curso.component.html',
  styleUrl: './detalle-curso.component.css'
})
export class DetalleCursoComponent implements OnInit{
  @Input() id?:number;
  datosCurso?:cursoResponse;

  private cursoServicio = inject(CursoService)
  private route =inject(Router)
  

  ngOnInit(): void {
    this.detalleCurso()
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
}
