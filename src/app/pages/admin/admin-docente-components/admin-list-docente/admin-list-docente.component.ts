
import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../../../core/services/entities/docente.service';
import { docenteResponse } from '../../../../core/models/docente';
import { CardPerfilDocenteComponent } from "../../../../shared/components/card-perfil-docente/card-perfil-docente.component";

@Component({
    selector: 'app-admin-list-docente',
    standalone: true,
    templateUrl: './admin-list-docente.component.html',
    styleUrl: './admin-list-docente.component.css',
    imports: [CardPerfilDocenteComponent]
})
export class AdminListDocenteComponent implements OnInit {
  responseList: docenteResponse[]=[]


  constructor(private docenteService: DocenteService) { }
  ngOnInit(): void {
    //this.optenerListadocentes()
    
  }
  verDocentes(){
    this.optenerListadocentes()
    console.log("click")
  }
  
    
    optenerListadocentes(){
      this.docenteService.optenerListaDocentes().subscribe({
        next:(response)=>{
          this.responseList=response;
          console.log(response)
  
        },
          error:(error)=>{
            console.log(error)
          }
        
      })
    }
  
}
