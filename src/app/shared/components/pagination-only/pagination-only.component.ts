import {  Injectable } from '@angular/core';
import { MatPaginatorIntl,MatPaginatorModule } from '@angular/material/paginator';
import { Subject } from 'rxjs';

@Injectable()
export class PaginationOnlyComponent implements MatPaginatorIntl{

  changes=new Subject<void>()

  firstPageLabel: string=$localize`Página inicial`;
  itemsPerPageLabel: string =$localize`Elementos Por Página:`;
  lastPageLabel: string=$localize`Ultima Página`;

  nextPageLabel: string='Siguiente';
  previousPageLabel: string='Atras';
  
  getRangeLabel(page: number, pageSize: number, length: number):string{
    if(length===0){
      return $localize`Página  1 de 1`;
    }
    const aamountPages =  Math.ceil(length/pageSize);
    return $localize`Página ${page +1 } de ${aamountPages} `
    
  };

}
