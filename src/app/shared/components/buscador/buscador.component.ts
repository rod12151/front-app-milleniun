import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ValidacionInput } from '../../utils/ValidacionInput';

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

  changename(query:string) {
    this.pageChange.emit(query);
  }


  filtrarLetras(event: any): void {
    ValidacionInput.filtrarLetras(event);
  }

  
}
