import { Component, Input, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { docenteResponse } from '../../../core/models/docente';
import { UrlSafeService } from '../../../core/services/helpers/urlSafe.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent implements OnInit{
  @Input() perfiles?: docenteResponse[]
  labelShow:Number=0;
  dataAvatar: docenteResponse[] = []
  num = 0
  constructor(private urlSafe:UrlSafeService,
    private route:Router
  ){}
  ngOnInit(): void {
      this.separarData(this.perfiles)
  }

  separarData(data?: docenteResponse[]) {
    if (data != undefined) {
      if (data.length > 3) {
        const first = data.slice(0, 3);
        const second = data.slice(3)
        this.dataAvatar = first;
        this.num = second.length;
      } else {
        this.dataAvatar = data
      }
    }
  }
  optenerUrlSegurp(url:String){
    return this.urlSafe.geturl(url);
  }
  entra(id:Number){
    this.labelShow=id
  }
  sale(){
    this.labelShow=0
  }
  detalleDocente(id:Number){
    if(id!=undefined){
      this.route.navigate([`docente/${id}`])
    }
  }

}
