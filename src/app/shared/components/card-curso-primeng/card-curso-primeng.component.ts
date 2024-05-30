import { Component, Input, OnInit } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { cursoResponse } from '../../../core/models/response/curso';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { UrlSafeService } from '../../../core/services/helpers/urlSafe.service';
import { AvatarComponent } from "../avatar/avatar.component";
import { docenteResponse } from '../../../core/models/docente';

@Component({
    selector: 'app-card-curso-primeng',
    standalone: true,
    templateUrl: './card-curso-primeng.component.html',
    styleUrl: './card-curso-primeng.component.css',
    imports: [CardModule, ButtonModule, AvatarGroupModule, AvatarModule, AvatarComponent]
})
export class CardCursoPrimengComponent implements OnInit{
  @Input() curso?:cursoResponse;
  @Input() docetes?:docenteResponse[]
  constructor(private urlService:UrlSafeService) { }

  ngOnInit(): void {
  }

  
  
  optenerUrlSegura(url:String){
    return this.urlService.geturl(url)
  }
  

}
