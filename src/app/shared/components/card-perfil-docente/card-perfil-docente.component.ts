import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { docenteResponse } from '../../../core/models/docente';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMars, faVenus, faVenusMars,faFeather,faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-card-perfil-docente',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, FontAwesomeModule],
  templateUrl: './card-perfil-docente.component.html',
  styleUrl: './card-perfil-docente.component.css'
})
export class CardPerfilDocenteComponent implements OnInit {
  iconVa = faMars;
  iconMu = faVenus;
  iconNeu = faVenusMars
  iconXTu = faXTwitter;
  iconWha = faWhatsapp;
  iconGog = faGoogle;
  iconBio=faFeather;
  iconRet=faFaceSmile;

  @Input() perfil?: docenteResponse
  safeUrl: SafeUrl = '';
  ngOnInit(): void {
    const url = this.geturl()
    this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
  }
  constructor(private sanitizer: DomSanitizer) { }
  review:boolean=false;

  geturl(): string {
    let urlReturn: String = ''
    if (this.perfil != undefined) {
      urlReturn = this.perfil?.avatar;
    } else {
      urlReturn = ''
    }
    return urlReturn.valueOf();


  }
  verReview(){
    this.review=!this.review
  }
  truncateText(text: String, maxLength: number): String {
    if (this.perfil != undefined){
      if (text.length <= maxLength) {
        return text;
      }
      return text.substring(0, maxLength - 3) + '...';
    }return ''
    
    
  }
  



}
