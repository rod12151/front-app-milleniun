import { Component, Input, OnInit } from '@angular/core';
import { ModuloResponse } from '../../../../core/models/response/modulo';
import { AddSesionComponent } from '../../admin-sesion-components/add-sesion/add-sesion.component';
import { LoginService } from '../../../../core/services/auth/login.service';
import { ViewSesionComponent } from '../../admin-sesion-components/view-sesion/view-sesion.component';
import { SessionService } from '../../../../core/services/entities/session.service';
import { SessionCompleteResponse } from '../../../../core/models/response/session';
@Component({
  selector: 'app-view-modulo',
  standalone: true,
  imports: [AddSesionComponent,ViewSesionComponent],
  templateUrl: './view-modulo.component.html',
  styleUrl: './view-modulo.component.css'
})
export class ViewModuloComponent implements OnInit{
  sesions:SessionCompleteResponse[]=[]
  ngOnInit(): void {
    this.opteneridAdmin()
    this.optenerSesiones()
  }
  admin:any
  constructor(private loginService:LoginService,
    private sesionService:SessionService
  ){}
  @Input() moduloResponse?:ModuloResponse;

  opteneridAdmin(){
    this.loginService.userActual.subscribe({
      next:data=>{
        this.admin=data
      }

    })
    const storedUser = this.loginService.getUser();
    if (storedUser) {
      this.admin = storedUser
    }
  }
  optenerSesiones(){
    if(this.moduloResponse){
      this.sesionService.optenerSessionesCompletasPorIdModulo(this.moduloResponse.idModulo).subscribe({
        next:data=>{
          this.sesions=data;
        }
      })
    }
  }
  

  creteSesionBoolean:boolean=false;

  ocultarCreateSesion(){
    this.creteSesionBoolean=false
  }


}
