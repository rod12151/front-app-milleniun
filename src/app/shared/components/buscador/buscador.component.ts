import { Component, EventEmitter, Output, inject, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputValidationsService } from '../../../core/services/helpers/input-validations.service';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  iconSearch=faSearch;
  @Output() pageChange = new EventEmitter<string>();
  private validacione = inject(InputValidationsService)

  changename(query:string) {
    this.pageChange.emit(query);
  }


  filtrarLetras(event: any): void {
    this.validacione.filtrarLetras(event);
  }

  
}
