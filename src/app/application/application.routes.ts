import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'drivers',
    loadComponent: () => import('./drivers/drivers.component').then(m => m.DriversComponent)
  },
  {
    path: 'circuits',
    loadComponent: () => import('./circuits/circuits.component').then(m => m.CircuitsComponent)
  }
];
