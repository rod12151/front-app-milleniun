import { Component, OnInit, inject } from '@angular/core';
import { CardPerfilDocenteComponent } from '../../../../shared/components/card-perfil-docente/card-perfil-docente.component';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { BuscadorComponent } from '../../../../shared/components/buscador/buscador.component';
import { paginationRequest, paginationResponse, queryRequestDocente } from '../../../../core/models/response/paginationResponse';
import { docenteResponse } from '../../../../core/models/docente';
import { DocenteService } from '../../../../core/services/entities/docente.service';
@Component({
  selector: 'app-list-docente',
  standalone: true,
  imports: [CardPerfilDocenteComponent,PaginationComponent,BuscadorComponent],
  templateUrl: './list-docente.component.html',
  styleUrl: './list-docente.component.css'
})
export class ListDocenteComponent implements OnInit{
  paginationRequest?: paginationRequest;
  private docenteService = inject(DocenteService)
  ngOnInit(): void {
      this.optenerDocentesPaginados(0)
  }
  query:queryRequestDocente={
    name: '',
    page: 0,
    size: 10,
  }
  response?:paginationResponse<docenteResponse>;
  datosDocentes?:docenteResponse[]=this.response?.content;
  optenerDocentesPaginados(pageNum: number):void{
    this.query.page=pageNum;
    this.docenteService.optenerdocentesPaginado(this.query).subscribe({
      next:(data)=>{
        this.paginationRequest = data as paginationRequest;
          this.response = data;
          this.datosDocentes = data.content;

      },
      error: (e) => {
        console.error(e)

      }
    })
  }
  onPageCahnge(page: number) {

    this.optenerDocentesPaginados(page);

  }
  onNameSearch(name:string){
    this.query.name=name;
    this.optenerDocentesPaginados(0);


  }
  

}
