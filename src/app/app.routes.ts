import { Routes } from '@angular/router';
import { LoginComponent } from './modules/pages/login/login.component';
import { LayoutComponent } from './modules/pages/layout/layout.component';
import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    }
];
