import { Component } from '@angular/core';
import { CursosListComponent } from "../cursos-list/cursos-list.component";

@Component({
    selector: 'app-cursos-actualizaciones-list',
    standalone: true,
    templateUrl: './cursos-actualizaciones-list.component.html',
    styleUrl: './cursos-actualizaciones-list.component.css',
    imports: [CursosListComponent]
})
export class CursosActualizacionesListComponent {

}
