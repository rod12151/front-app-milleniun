import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardPerfilDocenteComponent } from "../card-perfil-docente/card-perfil-docente.component";
@Component({
    selector: 'app-slider',
    standalone: true,
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.css',
    imports: [NgFor, CardPerfilDocenteComponent]
})
export class SliderComponent {
  @Input() cards: any[] = [];
  currentIndex: number = 0;

  
  prev() {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.cards.length - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex < this.cards.length - 1) ? this.currentIndex + 1 : 0;
  }
  
}
