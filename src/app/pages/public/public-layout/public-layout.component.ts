import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
@Component({
    selector: 'app-public-layout',
    standalone: true,
    templateUrl: './public-layout.component.html',
    styleUrl: './public-layout.component.css',
    imports: [RouterModule, FooterComponent, NavbarComponent]
})
export class PublicLayoutComponent {

}
