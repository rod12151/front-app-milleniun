import { Component, OnInit, inject } from '@angular/core';
import { CursoService } from '../../../../core/services/entities/curso.service';
import { Router } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { paginationRequest, paginationResponse, queryRequestCompleteCurso, queryRequestCurso } from '../../../../core/models/response/paginationResponse';
import { cursoResponse, numElements, tipoCurso, tipoValue, tipoValue2 } from '../../../../core/models/response/curso';
import { BuscadorComponent } from '../../../../shared/components/buscador/buscador.component';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule,MatLabel,MatHint } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule} from '@angular/material/input'


@Component({
  selector: 'app-list-curso',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatLabel,MatHint,MatSelectModule,MatInputModule,MatTabsModule,BuscadorComponent,PaginationComponent],
  templateUrl: './list-curso.component.html',
  styleUrl: './list-curso.component.css'
})
export class ListCursoComponent implements OnInit{
  private router = inject(Router)  
  private cursoService= inject(CursoService)
  constructor(private fb:FormBuilder){}

  typeCurso: tipoCurso="ACTUALIZACION";
  sizePage: number=10;
  statusBusqueda:boolean=true;
  paginationRequest?: paginationRequest;
  ngOnInit(): void {
    this.optenerCursosPaginados(0)
  }

  formBusqueda= this.fb.group({
    tipo:[this.typeCurso,[Validators.required]],
    estado:[true,[Validators.required]],
    cantidad:[5,[Validators.required]]
  })
  get tipo(){
    return this.formBusqueda.controls.tipo
  }
  get estado(){
    return this.formBusqueda.controls.estado
  }
  get cantidad(){
    return this.formBusqueda.controls.cantidad
  }
  query: queryRequestCompleteCurso = {
    type: this.typeCurso,
    name: '',
    page: 0,
    size: this.sizePage,
    status:this.statusBusqueda

  }
  response?: paginationResponse<cursoResponse>;
  datosCurso: cursoResponse[] = []

  validarQuery() {
    if (this.formBusqueda.valid&&this.tipo.value&&this.estado.value!=null&&this.cantidad.value) {
      this.query.type =this.tipo.value
      this.query.size=this.cantidad.value
      this.query.status=this.estado.value
    }
  }
  /**
   * validarQuery() {
    if (this.typeCurso != undefined && this.sizePage != undefined) {
      this.query.type = this.typeCurso;
      this.query.size = this.sizePage;
      this.query.status=this.statusBusqueda
    }
  }
   */
  optenerCursosPaginados(pageNum: number): void {
    this.validarQuery()
    this.query.page=pageNum
    console.log(this.query)
    
      this.cursoService.optenerListaCursosPaginadoAndStatus(this.query).subscribe({
        next: (data) => {
          this.paginationRequest = data as paginationRequest;
          this.response = data;
          this.datosCurso = data.content;
          console.log(this.datosCurso)


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
    displayedColumns: string[] = ['id', 'nombre', 'Tipo Curso', 'detalle','fecha Inicio','fecha Fin',
      'duracion','precio','estado'];
      dataSource=this.datosCurso;
    curso: tipoValue[]=[
      {viewValue:'Diplomado',value:'DIPLOMADO'},
      {viewValue:'Especialización',value:'ESPECIALIZACION'},
      {viewValue:'Actualización',value:'ACTUALIZACION'}
     ]
     status: tipoValue2[]=[
      {viewValue:'activo',value:true},
      {viewValue:'desactivado',value:false},
     ]
     

   numPages:numElements[]=[
    {viewValue:5,value:5},
    {viewValue:10,value:10},
    {viewValue:15,value:15},
    {viewValue:20,value:20}

   ]
   navegate(id:number){
    this.router.navigate([`admin/curso/detalle/${id}`])
   }



}
