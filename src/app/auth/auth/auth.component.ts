import { Component } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.css',
    imports: [RegisterComponent, LoginComponent]
})
export class AuthComponent {
    botonLogin: Boolean = true
    botonregister: Boolean = false

    LoginBoton() {
        this.botonLogin=true;
        this.botonregister=false;
    }

    RegisterBoton() {
        this.botonregister=true;
        this.botonLogin=false
    }

}
