import { Component, Input, OnInit, inject } from '@angular/core';
import { cursoResponse } from '../../../../core/models/response/curso';
import { CursoService } from '../../../../core/services/entities/curso.service';
import { ModuloService } from '../../../../core/services/entities/modulo.service';
import { SessionService } from '../../../../core/services/entities/session.service';
import { ModuloResponse } from '../../../../core/models/response/modulo';
import { SessionResponse } from '../../../../core/models/response/session';
import { ActivatedRoute, Router } from '@angular/router';
import { AddModuloComponent } from '../../admin-modulo-components/add-modulo/add-modulo.component';
import { ViewModuloComponent } from '../../admin-modulo-components/view-modulo/view-modulo.component';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-curso-admin-detalle',
  standalone: true,
  imports: [AddModuloComponent,ViewModuloComponent,MatExpansionModule],
  templateUrl: './curso-admin-detalle.component.html',
  styleUrl: './curso-admin-detalle.component.css'
})
export class CursoAdminDetalleComponent implements OnInit{
  @Input() idCurso?: number;
  
    private cursoService = inject( CursoService)
    private moduloService = inject( ModuloService)
    private sesionService = inject( SessionService)
    private route = inject(ActivatedRoute)
    private routenave= inject(Router)
  
  curso?: cursoResponse
  modulos:ModuloResponse[]=[]
  sesiones:SessionResponse[]=[]

  creteModuleBoolean:boolean=false;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idCurso = +params['id']; 
      this.detalleCurso();
  })
}
  

  detalleCurso() {
    if (this.idCurso != undefined) {
      this.cursoService.curso(this.idCurso).subscribe({
        next: data => { 
          this.curso = data
        },
        error:e=>{
          console.log(e)
        }
      })

      this.moduloService.optenerModuloPorIdCurso(this.idCurso).subscribe({
        next:data=>{
          this.modulos=data;
        },
        error:e=>{
          console.log(e)
        }
      })
      
    }
  }
  ocultarCrearModulo(){
    if (this.idCurso != undefined) {
    this.moduloService.optenerModuloPorIdCurso(this.idCurso).subscribe({
      next:data=>{
        this.modulos=data;
      },
      error:e=>{
        console.log(e)
      }
    })}
    this.creteModuleBoolean=false
  }
  navegateVolver(){
    this.routenave.navigate([`admin/curso/list-curso`])
  }
  

}
