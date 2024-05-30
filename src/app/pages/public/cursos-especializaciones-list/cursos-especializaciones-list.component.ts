import { Component } from '@angular/core';
import { CursosListComponent } from "../cursos-list/cursos-list.component";

@Component({
    selector: 'app-cursos-especializaciones-list',
    standalone: true,
    templateUrl: './cursos-especializaciones-list.component.html',
    styleUrl: './cursos-especializaciones-list.component.css',
    imports: [CursosListComponent]
})
export class CursosEspecializacionesListComponent {

}
