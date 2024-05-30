import { Component, Input } from '@angular/core';
import { cursoResponse } from '../../../core/models/response/curso';
import { docenteResponse } from '../../../core/models/docente';
import { AvatarComponent } from "../avatar/avatar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { FormatFechaService } from '../../../core/services/helpers/format-fecha.service';

@Component({
    selector: 'app-card-curso',
    standalone: true,
    templateUrl: './card-curso.component.html',
    styleUrl: './card-curso.component.css',
    imports: [AvatarComponent,FontAwesomeModule]
})
export class CardCursoComponent {
  @Input() curso?:cursoResponse;
  @Input() docentes?:docenteResponse[]

  calendarIcon=faCalendarDay
  constructor(private formatFecha:FormatFechaService){}


  optenerFecha(fecha:string){
    return this.formatFecha.formatearFechaEnLetras(fecha)

  }

}
