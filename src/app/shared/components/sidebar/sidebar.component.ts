import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule}  from '@angular/material/list'
import {MatIcon}  from '@angular/material/icon'
import { RouterLink, RouterLinkActive } from '@angular/router';
export type MenuItem = {
  icon:string;
  label:string;
  route?:string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,MatListModule,MatIcon,RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sideNavCollased = signal(false);
  
  @Input() set collapsed(val:boolean){
    this.sideNavCollased.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
    icon:'dashboard',
    label:'DASHBOARD',
    route:'welcome'
  },
  
  {
    icon:'menu_book',
    label:'CURSOS',
    route:'curso'
  },
  {
    icon:'groups',
    label:'DOCENTES',
    route:'docente'
  },
  {
    icon:'group',
    label:'ESTUDIANTES',
    route:'estudiante'
  }
  ]);

  profilePicSize = computed(()=> this.sideNavCollased()?'32':'100')



}
