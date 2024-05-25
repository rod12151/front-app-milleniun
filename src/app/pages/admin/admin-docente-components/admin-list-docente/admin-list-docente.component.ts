
import { Component, OnInit } from '@angular/core';
import { DocenteService } from '../../../../core/services/entities/docente.service';
import { docenteResponse } from '../../../../core/models/docente';
import { CardPerfilDocenteComponent } from "../../../../shared/components/card-perfil-docente/card-perfil-docente.component";

@Component({
    selector: 'app-admin-list-docente',
    standalone: true,
    templateUrl: './admin-list-docente.component.html',
    styleUrl: './admin-list-docente.component.css',
    imports: [CardPerfilDocenteComponent]
})
export class AdminListDocenteComponent implements OnInit {
  responseList: docenteResponse[] = [
    {
      id: 1,
      dni: '00000001',
      name: 'Jhoe',
      lastName: 'Doe Doe',
      email: '00000001@admin.com',
      especialidad: 'ADMIN',
      avatar: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      genero: 'none',
      review: 'Derecho Procesal Familiar, Conciliadora Extrajudicial con especialidad en asuntos de Familia debidamente acreditada por el Ministerio de Justicia y Derechos Humanos. Terapeuta y Facilitadora Familiar con enfoque Sistémico y Terapia de la Infancia. Socia fundadora y Gerente General de la firma B&T Consultoría Legal. Asesora externa para firmas legales. Ponente y capacitadora académica.'},
    {
      id: 2,
      dni: '00000002',
      name: 'prueba',
      lastName: 'prueba prueba',
      email: '00000002@usuario.prueba',
      especialidad: 'tester',
      avatar: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600',
      genero: 'FEMENINO',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt aliquid a, officiis soluta nostrum ipsam repellat numquam vitae corporis perspiciatis ad. Hic, cumque corpoquam vitae corporis perspiciatis ad. Hic, cumque corporis ipsa fugiat laudantium iure atque!'
    },
    {
      id: 1,
      dni: '00000001',
      name: 'Jhoe',
      lastName: 'Doe Doe',
      email: '00000001@admin.com',
      especialidad: 'ADMIN',
      avatar: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      genero: 'MASCULINO',
      review: 'corpoquam vitae corporis perspiciatis ad. Hic, cumque corporis ipsa fugiat laudantium iure atque!'
    },
    {
      id: 2,
      dni: '00000002',
      name: 'josefina blanca',
      lastName: 'quintanilla velarde de rimac',
      email: '00000002@usuario.prueba',
      especialidad: 'abogada de las afueras del cementerio',
      avatar: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600',
      genero: 'FEMENINO',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt aliquid a, officiis soluta nostrum ipsam repellat numquam vitae corporis perspiciatis ad. Hic, cumque corpoquam vitae corporis perspiciatis ad. Hic, cumque corporis ipsa fugiat laudantium iure atque!'
    },{
      id: 1,
      dni: '00000001',
      name: 'Jhoe',
      lastName: 'Doe Doe',
      email: '00000001@admin.com',
      especialidad: 'ADMIN',
      avatar: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      genero: 'MASCULINO',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt aliquid a, officiis soluta nostrum ipsam repellat numquam vitae corporis perspiciatis ad. Hic, cumque corpoquam vitae corporis perspiciatis ad. Hic, cumque corporis ipsa fugiat laudantium iure atque!'
    },
    {
      id: 2,
      dni: '00000002',
      name: 'prueba',
      lastName: 'prueba prueba',
      email: '00000002@usuario.prueba',
      especialidad: 'tester',
      avatar: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600',
      genero: 'FEMENINO',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt aliquid a, officiis soluta nostrum ipsam repellat numquam vitae corporis perspiciatis ad. Hic, cumque corpoquam vitae corporis perspiciatis ad. Hic, cumque corporis ipsa fugiat laudantium iure atque!'
    }
  ]


  constructor(private docenteService: DocenteService) { }
  ngOnInit(): void {
    //this.optenerListadocentes()
    
  }
  verDocentes(){
    this.optenerListadocentes()
    console.log("click")
  }
  
    
    optenerListadocentes(){
      this.docenteService.optenerListaDocentes().subscribe({
        next:(response)=>{
          this.responseList=response;
          console.log(response)
  
        },
          error:(error)=>{
            console.log(error)
          }
        
      })
    }
  
}
