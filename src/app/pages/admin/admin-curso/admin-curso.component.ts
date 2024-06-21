import { Component, Inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass,faFileCirclePlus,faBookOpenReader,faFilePen} from '@fortawesome/free-solid-svg-icons';


export type MenuItem = {
  
  icon:any;
  label:string;
  route?:string;
}

@Component({
  selector: 'app-admin-curso',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './admin-curso.component.html',
  styleUrl: './admin-curso.component.css'
})
export class AdminCursoComponent {
  constructor(private route:Router){}

  menuItems = signal<MenuItem[]>([{
    
    icon:faFileCirclePlus,
    label:'Agregar curso',
    route:'curso/create-curso'
  },
  
  {
    
    icon:faBookOpenReader,
    label:'Ver cursos',
    route:'curso/list-curso'
  },
  {
    
    icon:faMagnifyingGlass,
    label:'Buscar curso',
    route:'curso'
  },
  {
    
    icon:faFilePen,
    label:'Editar Curso',
    route:'curso'
  },
  ])
  redirect(ruta:any){
    if(ruta!=null){
      const rutaFinal='/admin/'+ruta
      console.log(rutaFinal)
      this.route.navigate([rutaFinal])
    }
  }

}
