import { Component, Input, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import {  } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardPerfilDocenteComponent } from "../../../shared/components/card-perfil-docente/card-perfil-docente.component";
import { cursoResponse } from '../../../core/models/response/curso';
import { docenteResponse } from '../../../core/models/docente';


@Component({
  selector: 'app-slider-primeng',
  standalone: true,
  imports: [CarouselModule,TagModule,CardPerfilDocenteComponent],
  templateUrl: './slider-primeng.component.html',
  styleUrl: './slider-primeng.component.css'
})
export class SliderPrimengComponent  implements OnInit{
  @Input() list?:docenteResponse[];
  
  responsiveOptions: any[] | undefined;

  constructor() { }

  ngOnInit() {

    

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 4,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '500px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  


}
