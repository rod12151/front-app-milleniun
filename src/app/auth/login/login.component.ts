import { Component, inject } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder,FormControl,FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../core/models/request/loginRequest';
import { LoginService } from '../../core/services/auth/login.service';
import * as jwt_decode from 'jwt-decode';
import { DecodeToken, Roles } from '../../core/services/auth/authHelper';
import { DocenteService } from '../../core/services/entities/docente.service';
import { EstudianteService } from '../../core/services/entities/estudiante.service';
import { docenteResponse } from '../../core/models/docente';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FontAwesomeModule,ReactiveFormsModule],

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  
  iconEmail=faEnvelope;
  iconPass=faKey;

  form:FormGroup;

  constructor(
    private fb:FormBuilder,
    private loginService:LoginService,
    private docenteServicio:DocenteService,
    private estudianteServicio:EstudianteService,
    private routers:Router
    
  ){
    this.form=this.fb.group({
      correo:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(7)])
    })
  }
  onSubmit(){
    if(this.form.valid){
      const credential=this.form.value as LoginRequest;
      this.loginService.login(credential).subscribe({
        next:(loginResponse)=>{
          const tokenDecode=jwt_decode.jwtDecode(loginResponse.token) as DecodeToken;
          const roles:Roles=new Roles(tokenDecode.isAdmin,tokenDecode.isDocente,tokenDecode.isStudent);
          this.loginService.setRole(roles);
          this.loginService.loginUser(loginResponse.token);
          if(roles.isAdmin || roles.isDocente){
            this.docenteServicio.optenerDocentePorEmail(credential.correo).subscribe({
              next:(userResponse)=>{
                this.loginService.optenerUsuarioActual(userResponse)}})         
          }else if(roles.isStudent){
            this.estudianteServicio.optenerDocentePorEmail(credential.correo).subscribe({
              next:(userResponse)=>{
                this.loginService.optenerUsuarioActual(userResponse)
              }
            })
          }
        },
        error:(error)=>{
          console.log(error)
        },
        complete:()=>{
          if(this.loginService.getRole().isAdmin){
            this.routers.navigate(['/admin'])
          }
        }
      })
      console.log(this.form.value)
    }
    else {
      this.form.markAllAsTouched()
    }
    
  }
  


}
