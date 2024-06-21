import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModuloResponse } from '../../../../core/models/response/modulo';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { InputValidationsService } from '../../../../core/services/helpers/input-validations.service';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { moduloCreateRequest } from '../../../../core/models/request/moduloRequest';
import { ModuloService } from '../../../../core/services/entities/modulo.service';
import { LoginService } from '../../../../core/services/auth/login.service';

@Component({
  selector: 'app-add-modulo',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatLabel,MatInputModule],
  templateUrl: './add-modulo.component.html',
  styleUrl: './add-modulo.component.css'
})
export class AddModuloComponent {
  @Input() idCursoInput?:number;
  @Output() creacionCompletada= new EventEmitter<void>();
  modulo?:ModuloResponse;
  constructor(
    private fb:FormBuilder,
    private inputValid:InputValidationsService,
    private moduloService:ModuloService,
    private loginService:LoginService
  ){}
  formModulo = this.fb.group({
    nombre:['',[Validators.required]],
    detalle:['',[Validators.required]],
  })

  get nombre(){
    return this.formModulo.controls.nombre
  }
  get detalle(){
    return this.formModulo.controls.detalle
  }

 
  onSubmit(){
    if(this.formModulo.valid && this.idCursoInput){
      const request=this.formModulo.value as moduloCreateRequest
      request.idCurso=this.idCursoInput
      this.moduloService.crearModulo(request).subscribe({
        next:data=>{
          console.log(data)
        },
        error:e=>{
          console.log(e)
        },
        complete:()=>{
          this.creacionCompletada.emit()
        }
      })

    }
    
    
    
  }
  onCancel(){
    this.creacionCompletada.emit()
  }
  
}
