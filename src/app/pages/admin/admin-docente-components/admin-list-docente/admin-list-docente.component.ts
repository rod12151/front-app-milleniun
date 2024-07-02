
import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../../../core/services/entities/docente.service';
import { docenteResponse } from '../../../../core/models/docente';
import { ListDocenteComponent } from '../../../public/docente/list-docente/list-docente.component'; 

@Component({
    selector: 'app-admin-list-docente',
    standalone: true,
    templateUrl: './admin-list-docente.component.html',
    styleUrl: './admin-list-docente.component.css',
    imports: [ListDocenteComponent]
})
export class AdminListDocenteComponent implements OnInit {
  responseList: docenteResponse[]=[]


  constructor(private docenteService: DocenteService) { }
  ngOnInit(): void {
    //this.optenerListadocentes()
    
  }
   
}
