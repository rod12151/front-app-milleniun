import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CursoService } from '../../../core/services/entities/curso.service';
import { paginationRequest, paginationResponse, queryRequestCurso } from '../../../core/models/response/paginationResponse';
import { cursoResponse, tipoCurso } from '../../../core/models/response/curso';
import { CardCursoComponent } from "../../../shared/components/card-curso/card-curso.component";
import { PaginationComponent } from "../../../shared/components/pagination/pagination.component";
import { promises } from 'node:dns';
import { BuscadorComponent } from "../../../shared/components/buscador/buscador.component";

@Component({
  selector: 'app-cursos-list',
  standalone: true,
  templateUrl: './cursos-list.component.html',
  styleUrl: './cursos-list.component.css',
  imports: [CardCursoComponent, PaginationComponent, BuscadorComponent]
})
export class CursosListComponent implements OnInit {
  @Input() typeCurso?: tipoCurso;
  @Input() sizePage?: number;
  paginationRequest?: paginationRequest;


  ngOnInit(): void {
    this.optenerCursosPaginados(0)
  }
  query: queryRequestCurso = {
    type: 'ACTUALIZACION',
    name: '',
    page: 0,
    size: 10,

  }



  response?: paginationResponse<cursoResponse>;
  datosCurso?: cursoResponse[] = this.response?.content;

  constructor(private CursoService: CursoService) { }

  validarQuery() {
    if (this.typeCurso != undefined && this.sizePage != undefined) {
      this.query.type = this.typeCurso;
      this.query.size = this.sizePage;
    }
  }

  optenerCursosPaginados(pageNum: number): void {
    this.validarQuery()
    this.query.page=pageNum
    console.log(this.query)
    
      this.CursoService.optenerListaCursosPaginado(this.query).subscribe({
        next: (data) => {
          this.paginationRequest = data as paginationRequest;
          this.response = data;
          this.datosCurso = data.content;


        },
        error: (e) => {
          console.error(e)

        }
      })
    }

  

  onPageCahnge(page: number) {

    this.optenerCursosPaginados(page);

  }
  onNameSearch(name:string){
    this.query.name=name;
    this.optenerCursosPaginados(0);


  }




}
