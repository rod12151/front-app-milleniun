import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './pages/public/public-layout/public-layout.component';

import { AuthComponent } from './auth/auth/auth.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminWelcomComponent } from './pages/admin/admin-welcom/admin-welcom.component';
import { AdminPerfilComponent } from './pages/admin/admin-perfil/admin-perfil.component';

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
        ]
    }

];
