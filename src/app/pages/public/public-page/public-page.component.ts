import { Component, OnInit } from '@angular/core';
import { AdminListDocenteComponent } from "../../admin/admin-docente-components/admin-list-docente/admin-list-docente.component";
import { CursosListComponent } from "../cursos-list/cursos-list.component";
import { docenteResponse } from '../../../core/models/docente';
import { SliderComponent } from "../../../shared/components/slider/slider.component";
import { SliderPrimengComponent } from "../../../shared/components/slider-primeng/slider-primeng.component";
import { AvatarComponent } from "../../../shared/components/avatar/avatar.component";
import { cursoResponse } from '../../../core/models/response/curso';
import { CardCursoPrimengComponent } from "../../../shared/components/card-curso-primeng/card-curso-primeng.component";
import { CardCursoComponent } from "../../../shared/components/card-curso/card-curso.component";
@Component({
    selector: 'app-public-page',
    standalone: true,
    templateUrl: './public-page.component.html',
    styleUrl: './public-page.component.css',
    imports: [AdminListDocenteComponent, CursosListComponent, SliderComponent, SliderPrimengComponent, AvatarComponent, CardCursoPrimengComponent, CardCursoComponent]
})
export class PublicPageComponent  {
  responseList: docenteResponse[] = [

    {
      id: 1,
      dni: '00000001',
      name: 'maria Alejandra',
      lastName: 'Doe Doe',
      email: '00000001@admin.com',
      especialidad: 'ADMIN',
      avatar: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      genero: 'none',
      review: 'Derecho Procesal Familiar, Conciliadora Extrajudicial con especialidad en asuntos de Familia debidamente acreditada por el Ministerio de Justicia y Derechos Humanos. Terapeuta y Facilitadora Familiar con enfoque Sistémico y Terapia de la Infancia. Socia fundadora y Gerente General de la firma B&T Consultoría Legal. Asesora externa para firmas legales. Ponente y capacitadora académica.'
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
    },
    {
      id: 3,
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
      id: 4,
      dni: '00000002',
      name: 'josefina blanca',
      lastName: 'quintanilla velarde de rimac',
      email: '00000002@usuario.prueba',
      especialidad: 'abogada de las afueras del cementerio',
      avatar: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600',
      genero: 'FEMENINO',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt aliquid a, officiis soluta nostrum ipsam repellat numquam vitae corporis perspiciatis ad. Hic, cumque corpoquam vitae corporis perspiciatis ad. Hic, cumque corporis ipsa fugiat laudantium iure atque!'
    }, {
      id: 5,
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
      id: 6,
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
      id: 7,
      dni: '00000001',
      name: 'Jhoe',
      lastName: 'Doe Doe',
      email: '00000001@admin.com',
      especialidad: 'ADMIN',
      avatar: 'https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      genero: 'none',
      review: 'Derecho Procesal Familiar, Conciliadora Extrajudicial con especialidad en asuntos de Familia debidamente acreditada por el Ministerio de Justicia y Derechos Humanos. Terapeuta y Facilitadora Familiar con enfoque Sistémico y Terapia de la Infancia. Socia fundadora y Gerente General de la firma B&T Consultoría Legal. Asesora externa para firmas legales. Ponente y capacitadora académica.'
    },
    {
      id: 8,
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
      id: 9,
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
      id: 21,
      dni: '00000002',
      name: 'josefina blanca',
      lastName: 'quintanilla velarde de rimac',
      email: '00000002@usuario.prueba',
      especialidad: 'abogada de las afueras del cementerio',
      avatar: 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600',
      genero: 'FEMENINO',
      review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt aliquid a, officiis soluta nostrum ipsam repellat numquam vitae corporis perspiciatis ad. Hic, cumque corpoquam vitae corporis perspiciatis ad. Hic, cumque corporis ipsa fugiat laudantium iure atque!'
    }, {
      id: 11,
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
      id: 24,
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
  curso:cursoResponse={
    
      id: 5,
      nombre: "Derecho Judicial",
      tag:"diplomadoEspecialisado",
      precio:200,
      tipoCurso: "DIPLOMADO",
      detalle: "Lorem, ipsum dolor sit Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt aliquid a, officiis soluta nostrum ipsam repellat numquam vitae corporis perspiciatis ad. Hic, cumque corpoquam vitae corporis perspiciatis ad. Hic, cumque corporiLorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto incidunt aliquid a, officiis soluta nostrum ipsam repellat numquam vitae corporis perspiciatis ad. Hic, cumque corpoquam vitae corporis perspiciatis ad. Hic, cumque corporis ipsa fugiat laudantium iure atque!s ipsa fugiat laudantium iure atque!amet consectetur adipisicing elit. Architecto incidunt aliquid a, officiis soluta nostrum ipsam repellat numquam vitae corporis perspiciatis ad. Hic, cumque corpoquam vitae corporis perspiciatis ad. Hic, cumque corporis ipsa fugiat laudantium iure atque!",
      fechaInicio: "2024-06-02",
      fechaFin: "2024-06-02",
      modalidad: "PRESENCIAL",
      duration: 16,
      image:"https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    
  }



  
  

}
