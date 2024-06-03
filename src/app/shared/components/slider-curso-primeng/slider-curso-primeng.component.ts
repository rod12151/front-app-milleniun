import { Component, Input, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import {  } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardPerfilDocenteComponent } from "../card-perfil-docente/card-perfil-docente.component";
import { cursoAndDocentes, cursoResponse, datosAdicionales } from '../../../core/models/response/curso';
import { RouterModule } from '@angular/router';
import { CardCursoComponent } from "../card-curso/card-curso.component";
import { faCentercode } from '@fortawesome/free-brands-svg-icons';


@Component({
    selector: 'app-slider-curso-primeng',
    standalone: true,
    templateUrl: './slider-curso-primeng.component.html',
    styleUrl: './slider-curso-primeng.component.css',
    imports: [CarouselModule, TagModule, CardPerfilDocenteComponent, CardCursoComponent,RouterModule]
})
export class SliderCursoPrimengComponent  implements OnInit{
  @Input() listaDocenteAndCurso?:cursoAndDocentes[];
  @Input() datosAdicionales?:datosAdicionales;
  
  
  responsiveOptions: any[] | undefined;

  constructor() { }

  ngOnInit() {

    

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
        

      },
      {
        breakpoint: '900px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '800px',
        numVisible: 1,
        numScroll: 1,

      }
    ];
  }
  
texMinuscula(texto:String){
  return texto.toLowerCase()

}

}
