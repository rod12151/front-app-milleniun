
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],

})
export class AppComponent implements OnInit {
  title = 'app-millenius';
  doc = inject(DOCUMENT)
  constructor(@Inject(PLATFORM_ID) private platformId: any) {

  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      console.log("Brouser")
    }

  }
}
