import { Component } from '@angular/core';
import { CursosListComponent } from "../cursos-list/cursos-list.component";

@Component({
    selector: 'app-cursos-diplomados-list',
    standalone: true,
    templateUrl: './cursos-diplomados-list.component.html',
    styleUrl: './cursos-diplomados-list.component.css',
    imports: [CursosListComponent]
})
export class CursosDiplomadosListComponent {

}
