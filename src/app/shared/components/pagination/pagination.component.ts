import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { paginationRequest } from '../../../core/models/response/paginationResponse';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() data!: paginationRequest;
  @Output() pageChange = new EventEmitter<number>();

  changePage(pageNumber: number) {
    this.pageChange.emit(pageNumber);
  }

}
