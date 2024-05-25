import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ValidacionInput } from '../../../../shared/utils/ValidacionInput'; 
import { DocenteService } from '../../../../core/services/entities/docente.service';
import { docenteCreateRequest } from '../../../../core/models/request/docenteRequest';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-docente',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-docente.component.html',
  styleUrl: './add-docente.component.css'
})
export class AddDocenteComponent {
  formAddDocente:FormGroup;
  filtrarNumeros(event: any): void {
    ValidacionInput.filtrarNumeros(event);
  }
  filtrarLetras(event: any): void {
    ValidacionInput.filtrarLetras(event);
  }

  constructor(private fb:FormBuilder,private docenteServicio:DocenteService,private router:Router){
    this.formAddDocente=this.fb.group({
      dni:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8) ]),
      name:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)]),
      especialidad:new FormControl('',[Validators.required])
    })
  }
  onSubmit(){
    if(this.formAddDocente.valid){
      const request = this.formAddDocente.value as docenteCreateRequest;
      this.docenteServicio.guardarDocente(request).subscribe({
        next:(response)=>{
          console.log(response);
          
        },
        error:(eroor)=>{
          console.log(eroor)
        }
      })
    }
  };

  onCancel(){
    this.router.navigate(['admin/docente'])
  }

}
