import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputValidationsService } from '../../core/services/helpers/input-validations.service';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private validacion=inject(InputValidationsService)
  
  form:FormGroup;
  filtrarNumeros(event: any): void {
    this.validacion.filtrarNumeros(event);
  }
  filtrarLetras(event: any): void {
   this.validacion.filtrarLetras(event);
  }

  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      dni:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(8) ]),
      name:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(8)])
    })
  }
  onSubmit(){
    if(this.form.valid){
      console.log(this.form.value)
    }
  }

}
