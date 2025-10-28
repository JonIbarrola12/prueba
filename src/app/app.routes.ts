import { Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { routes as applicationRoutes } from './application/application.routes';

export const routes: Routes = [
    {
        path: '',
        component: ApplicationComponent,
        children: applicationRoutes,
    },
];
