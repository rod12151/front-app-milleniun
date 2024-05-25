import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './pages/public/public-layout/public-layout.component';

import { AuthComponent } from './auth/auth/auth.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminWelcomComponent } from './pages/admin/admin-welcom/admin-welcom.component';
import { AdminPerfilComponent } from './pages/admin/admin-perfil/admin-perfil.component';
import { AdminDocenteComponent } from './pages/admin/admin-docente/admin-docente.component';
import { AdminEstudianteComponent } from './pages/admin/admin-estudiante/admin-estudiante.component';
import { AdminCursoComponent } from './pages/admin/admin-curso/admin-curso.component';
import { AddDocenteComponent } from './pages/admin/admin-docente-components/add-docente/add-docente.component';
import { AdminListDocenteComponent } from './pages/admin/admin-docente-components/admin-list-docente/admin-list-docente.component';

export const routes: Routes = [
    {
        path: '', component: PublicLayoutComponent,
        children: [
            { path: '', redirectTo: '', pathMatch: 'full' },


        ]
    },
    {
        path: "auth", component: AuthComponent
    },
    {
        path: 'admin', component: AdminDashboardComponent,
        children: [
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: "welcome", component: AdminWelcomComponent },
            { path: "perfil", component: AdminPerfilComponent },
            { path: 'docente', component: AdminDocenteComponent },
            { path: 'estudiante', component: AdminEstudianteComponent },
            { path: 'curso', component: AdminCursoComponent },
            { path: 'docente/create-docente', component: AddDocenteComponent },
            { path: 'docente/list-docente', component: AdminListDocenteComponent },
        ]
    }

];
