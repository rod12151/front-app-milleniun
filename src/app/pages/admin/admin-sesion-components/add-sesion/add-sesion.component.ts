import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatFormFieldModule,MatLabel,MatHint } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgIf,NgFor } from '@angular/common';
import { MatInputModule} from '@angular/material/input'
import { SessionResponse } from '../../../../core/models/response/session';
import { tipoValue2 } from '../../../../core/models/response/curso';
import { sessionCreateRequest } from '../../../../core/models/request/sessionRequest';
import { DateTimeService } from '../../../../core/services/helpers/date-time.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {provideNativeDateAdapter} from '@angular/material/core';
import { DocenteService } from '../../../../core/services/entities/docente.service';
import { docenteResponse } from '../../../../core/models/docente';
import { SessionService } from '../../../../core/services/entities/session.service';

@Component({
  selector: 'app-add-sesion',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [ReactiveFormsModule,MatFormFieldModule,MatLabel,MatHint,NgIf,MatSelectModule,NgFor,MatInputModule,MatDatepickerModule,MatIconModule],
  templateUrl: './add-sesion.component.html',
  styleUrl: './add-sesion.component.css'
})
export class AddSesionComponent {
  @Input() idModuloinput?:number;
  @Input() idAdmin?:number;
  @Output() sesionCompletada = new EventEmitter<void>();
  sesion?:SessionResponse;

  constructor(
    private fb:FormBuilder,
    private fechaService:DateTimeService,
    private docenteService:DocenteService,
    private sessionService:SessionService
  ){}
  searchUserInput = new FormControl('');
  docentes: docenteResponse[] = [];
  docenteSelect?: docenteResponse;
  idDocente?:Number;
  dSelected = false;

  searchDocente() {
    const value: string = this.searchUserInput.value || '';

    this.docenteService.optenerDocentePorName(value)
      .subscribe(data => {
        this.docentes = data;

      });
    
  }
  usuarioSeleccionado(resultado: docenteResponse) {
  
      this.docenteSelect = resultado;
    
      this.dSelected = true;
      this.idDocente = resultado.id
      
    

    

  }
  formSesion = this.fb.group({
    description:['',[Validators.required]],
    material:['',[Validators.required]],
    fecha:[new Date,[Validators.required]],
    status:[false],
    inicioSession:['',[Validators.required]],
    finalSession:['',[Validators.required]],
  })

  
  
  get description(){
    return this.formSesion.controls.description
  }
  get material(){
    return this.formSesion.controls.material    
  }
  get status(){
    return this.formSesion.controls.status
  }  
  get inicioSession(){
    return this.formSesion.controls.inicioSession
  }
  get finalSession(){
    return this.formSesion.controls.finalSession
  }
  get fecha(){
    return this.formSesion.controls.fecha
  }


  estadosTipe: tipoValue2[]=[
    {viewValue:'activo',value:true},
    {viewValue:'desactivado',value:false},
   ]
  
  onSubmit(){
    if(this.formSesion.valid&& this.idAdmin){
      
      const requestAux= this.formSesion.value;
      if(requestAux.fecha!=undefined&& requestAux.finalSession&&requestAux.description&&requestAux.inicioSession&&requestAux.material&&requestAux.status){
        const request:sessionCreateRequest={
          idModulo:this.idModuloinput,
          idDocente:this.idDocente?.valueOf(),
          description:requestAux.description,
          material:requestAux.material,
          inicioSession:this.fechaService.convertirFechaISO(requestAux.fecha,requestAux.inicioSession),
          finalSession:this.fechaService.convertirFechaISO(requestAux.fecha,requestAux.finalSession),
          status:requestAux.status

        }
        this.sessionService.crearSesion(request,this.idAdmin).subscribe({
          next:data=>{
            console.log(data)
          },
          complete:()=>{
            this.sesionCompletada.emit()
          }
        })
      }
      
      
      
       
  
    }
    console.log(this.formSesion.value)

    
  }
  validarDatos(){
    return (
      
      this.fecha instanceof Date &&
      this.inicioSession!=null &&
      this.finalSession!=null&&
      this.idModuloinput

    )
      
  }

  onCancel(){
    this.sesionCompletada.emit()
  }

}
