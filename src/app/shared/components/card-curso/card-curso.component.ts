import { Component, Input, inject } from '@angular/core';
import { cursoAndDocentes, cursoResponse } from '../../../core/models/response/curso';
import { docenteResponse } from '../../../core/models/docente';
import { AvatarComponent } from "../avatar/avatar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { FormatFechaService } from '../../../core/services/helpers/format-fecha.service';
import { Router } from '@angular/router';
import { StringHelpesService } from '../../../core/services/helpers/string-helpes.service';


@Component({
    selector: 'app-card-curso',
    standalone: true,
    templateUrl: './card-curso.component.html',
    styleUrl: './card-curso.component.css',
    imports: [AvatarComponent,FontAwesomeModule]
})
export class CardCursoComponent {
  @Input() datos?:cursoAndDocentes;
  
  private route=inject(Router)
  private cutText=inject(StringHelpesService)

  calendarIcon=faCalendarDay
  constructor(private formatFecha:FormatFechaService
  ){}


  optenerFecha(fecha:string){
    return this.formatFecha.formatearFechaEnLetras(fecha)

  }

  detalleCurso(id:number){
    if(id!=undefined){
      console.log(`curso/${id}`)
      this.route.navigate([`curso/${id}`])
      

    }
  
  }
  cortarTexto(text:String,valor:number){
    return this.cutText.truncateText(text,valor)
  }

}

