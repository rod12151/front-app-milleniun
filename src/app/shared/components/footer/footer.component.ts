import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import { faTelegram } from '@fortawesome/free-brands-svg-icons';

import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
actuallyDate:Number = new Date().getFullYear()
  iconFa=faFacebook;
  iconXTu=faXTwitter;
  iconYou=faYoutube;
  iconWha=faWhatsapp;
  iconTel=faTelegram;
  iconGog=faGoogle;

}
