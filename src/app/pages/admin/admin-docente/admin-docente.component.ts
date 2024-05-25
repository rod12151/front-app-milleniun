import { Component, Inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserTie,faUsersViewfinder,faMagnifyingGlass,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {MatIcon}  from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
export type MenuItem = {
  
  icon:any;
  label:string;
  route?:string;
}

@Component({
  selector: 'app-admin-docente',
  standalone: true,
  imports: [FontAwesomeModule,MatDividerModule,MatButtonModule,MatIcon],
  templateUrl: './admin-docente.component.html',
  styleUrl: './admin-docente.component.css'
})
export class AdminDocenteComponent {
  constructor(private router:Router){}
  
 
  menuItems = signal<MenuItem[]>([{
    
    icon:faUserPlus,
    label:'Agregar Docente',
    route:'docente/create-docente'
  },
  
  {
    
    icon:faUsersViewfinder,
    label:'Ver Docentes',
    route:'docente/list-docente'
  },
  {
    
    icon:faMagnifyingGlass,
    label:'Buscar Docente',
    route:'docente'
  },
  {
    
    icon:faUserTie,
    label:'Asignar Docente',
    route:'estudiante'
  } ])

  redirect(ruta:any){
    if(ruta!=null){
      const rutaFinal='/admin/'+ruta
      this.router.navigate([rutaFinal])
    }
  }


}
