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
import { PublicPageComponent } from './pages/public/public-page/public-page.component';
import { CursosDiplomadosListComponent } from './pages/public/cursos-diplomados-list/cursos-diplomados-list.component';
import { CursosActualizacionesListComponent } from './pages/public/cursos-actualizaciones-list/cursos-actualizaciones-list.component';
import { CursosEspecializacionesListComponent } from './pages/public/cursos-especializaciones-list/cursos-especializaciones-list.component';
import { DetalleCursoComponent } from './pages/public/curso/detalle-curso/detalle-curso.component';
import { DetalleDocenteComponent } from './pages/public/docente/detalle-docente/detalle-docente.component';
import { AddCursoComponent } from './pages/admin/admin-curso-components/add-curso/add-curso.component';
import { ListCursoComponent } from './pages/admin/admin-curso-components/list-curso/list-curso.component';
import { CursoAdminDetalleComponent } from './pages/admin/admin-curso-components/curso-admin-detalle/curso-admin-detalle.component';
import { ListDocenteComponent } from './pages/public/docente/list-docente/list-docente.component';

export const routes: Routes = [
    {
        path: '', component: PublicLayoutComponent,
        children: [
            {path:'',component:PublicPageComponent},
            {path:'docentes',component:ListDocenteComponent},
            {path:'diplomado',component:CursosDiplomadosListComponent},
            {path:'actualizacion',component:CursosActualizacionesListComponent},
            {path:'especializacion',component:CursosEspecializacionesListComponent},
            {path: "auth", component: AuthComponent},
            {path:'curso/:id',component:DetalleCursoComponent},
            {path:'docente/:id',component:DetalleDocenteComponent},
            


        ]
    },
    /*{
        path: "auth", component: AuthComponent
    },*/
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
            { path: 'curso/create-curso',component: AddCursoComponent},
            { path: 'curso/list-curso',component: ListCursoComponent},
            { path: 'curso/detalle/:id',component: CursoAdminDetalleComponent},

        ]
    }

];
