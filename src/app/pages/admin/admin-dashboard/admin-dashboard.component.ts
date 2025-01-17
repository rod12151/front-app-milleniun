import { Component, computed, signal } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { SidebarComponent } from "../../../shared/components/sidebar/sidebar.component";
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbar} from '@angular/material/toolbar'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSliders,faCaretLeft,faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../../core/services/auth/login.service';
@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.css',
    imports: [RouterOutlet,FontAwesomeModule, SidebarComponent,MatSidenavModule,MatToolbar,RouterModule]
})
export class AdminDashboardComponent {
    constructor(private loginService:LoginService){}
    iconSlider=faSliders;
    iconArrowLeft=faCaretLeft
    iconArrowRight=faCaretRight
    collapsed = signal(false);

    sidenavWidth=computed(()=>this.collapsed()?'65px':'250px')

    cerrarSesion(){
        this.loginService.logout()
    
    }
}