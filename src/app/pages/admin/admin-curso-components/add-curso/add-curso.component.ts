import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatFormFieldModule,MatLabel,MatHint } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgIf,NgFor } from '@angular/common';
import { cursoResponse, tipoValue, tipoValue2 } from '../../../../core/models/response/curso';
import { MatInputModule} from '@angular/material/input'
import { cursoCreateRequest } from '../../../../core/models/request/cursoRequest';
import { CursoService } from '../../../../core/services/entities/curso.service';
import { LoginService } from '../../../../core/services/auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-curso',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatLabel,MatHint,NgIf,MatSelectModule,NgFor,MatInputModule],
  templateUrl: './add-curso.component.html',
  styleUrl: './add-curso.component.css'
})
export class AddCursoComponent {
  idAdmin:number=1;
  cursoResponse?:cursoResponse;
  constructor(private fb:FormBuilder,
    private cursoService:CursoService,
    private loginService:LoginService,
    private router:Router
  ){}
  
  formCurso=this.fb.group({
    nombre:['',[Validators.required]],
    tipoCurso: ['',[Validators.required]],
    detalle:[''],
    modalidadCurso:['',[Validators.required]],
    activo:[false],
    image:[''],
    precio:[0,[Validators.required,Validators.min(0)]]

  })
  get nombre(){
    return this.formCurso.controls.nombre
  }
  get tipoCurso(){
    return this.formCurso.controls.tipoCurso
  }
  get activo(){
    return this.formCurso.controls.activo
  }
  get image(){
    return this.formCurso.controls.image
  }
  get precio(){
    return this.formCurso.controls.precio
  }


  onSubmit(){
    if(this.formCurso.valid){
      const request = this.formCurso.value as cursoCreateRequest;
      const id=this.loginService.userActual
      this.cursoService.crearCurso(request,this.idAdmin).subscribe({
        next:(response)=>{
          this.cursoResponse=response;
          console.log(response);
          
        },
        error:(eroor)=>{
          console.log(eroor)
        },
        complete:()=>{
          this.router.navigate([`admin/curso/detalle/${this.cursoResponse?.id}`])
        }
      })
    }
  }
  onCancel(){
    this.router.navigate(['admin/curso'])
  }

  curso: tipoValue[]=[
    {viewValue:'Diplomado',value:'DIPLOMADO'},
    {viewValue:'Especialización',value:'ESPECIALIZACION'},
    {viewValue:'Actualización',value:'ACTUALIZACION'}
   ]
   modalidad: tipoValue[]=[
    {viewValue:'Online',value:'ONLINE'},
    {viewValue:'Mixto',value:'MIXTO'},
    {viewValue:'Presencial',value:'PRESENCIAL'}
   ]
   status: tipoValue2[]=[
    {viewValue:'activo',value:true},
    {viewValue:'desactivado',value:false},
   ]

  
}
