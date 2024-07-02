import { Component, Input, OnInit, inject } from '@angular/core';
import { docenteResponse } from '../../../../core/models/docente';
import { DocenteService } from '../../../../core/services/entities/docente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-docente',
  standalone: true,
  imports: [],
  templateUrl: './detalle-docente.component.html',
  styleUrl: './detalle-docente.component.css'
})
export class DetalleDocenteComponent implements OnInit{
  @Input() id?:number;
  docente?:docenteResponse;
  private docenteService=inject(DocenteService)
  private route=inject(Router)
ngOnInit(): void {
    this.detalleDocente()
}
  detalleDocente(){
    if(this.id!=undefined){
      this.docenteService.optenerDocentePorID(this.id).subscribe({
        next:data=>{
          this.docente=data
          console.log(data)
        },
        error:e=>{
          console.error(e)
        }
      })

    }else{
      this.route.navigate([''])
    }
  }
}
