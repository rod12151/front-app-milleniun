import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../../core/services/auth/login.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 icon=faHome;
 constructor(private loginService:LoginService){

 }
 public logout(){
  this.loginService.logout();
 }
 public isLogin(){
  return this.loginService.isLoggedIn();
 }
 
}
