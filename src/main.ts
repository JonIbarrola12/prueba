import { bootstrapApplication } from '@angular/platform-browser';
import { Info, Flag, LucideAngularModule, UserCheck, Home } from 'lucide-angular';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ Home, Info, Flag, UserCheck }))
  ],
});