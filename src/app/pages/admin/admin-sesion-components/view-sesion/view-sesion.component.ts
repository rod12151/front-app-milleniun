import { Component,Input, inject } from '@angular/core';
import { SessionCompleteResponse } from '../../../../core/models/response/session';
import { MatExpansionModule } from '@angular/material/expansion';
import { DateTimeService } from '../../../../core/services/helpers/date-time.service';
@Component({
  selector: 'app-view-sesion',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './view-sesion.component.html',
  styleUrl: './view-sesion.component.css'
})
export class ViewSesionComponent {
  @Input() session?:SessionCompleteResponse;
  private dateService=inject(DateTimeService)

  fechaAndHora(dateTime:string){
    
this.dateService.extraterFechaHora(dateTime)
  }

}
