import { Component, Input, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list'
import { MatIcon } from '@angular/material/icon'
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../../core/services/auth/login.service';
import { SafeUrl } from '@angular/platform-browser';
import { UrlSafeService } from '../../../core/services/helpers/urlSafe.service';
export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatListModule, MatIcon, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  userPerfil: any;
  sideNavCollased = signal(false);
  constructor(
    private loginService: LoginService,
    private safeUrl: UrlSafeService
  ) { }

  @Input() set collapsed(val: boolean) {
    this.sideNavCollased.set(val);
  }
  ngOnInit(): void {
    this.usuarioActual();
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'DASHBOARD',
      route: 'welcome'
    },

    {
      icon: 'menu_book',
      label: 'CURSOS',
      route: 'curso'
    },
    {
      icon: 'groups',
      label: 'DOCENTES',
      route: 'docente'
    },
    {
      icon: 'group',
      label: 'ESTUDIANTES',
      route: 'estudiante'
    }
  ]);

  profilePicSize = computed(() => this.sideNavCollased() ? '32' : '100')


  usuarioActual() {
    this.loginService.userActual.subscribe({
      next: data => {
        this.userPerfil = data;
      }
    })

    const storedUser = this.loginService.getUser();
    if (storedUser) {
      this.userPerfil = storedUser;
    }

  }

  optenerUrl(url:string){
    this.safeUrl.geturl(url)
  }
}
