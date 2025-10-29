import { bootstrapApplication } from '@angular/platform-browser';
import { Info, Flag, LucideAngularModule, UserCheck, Home, ChevronRight, ChevronLeft } from 'lucide-angular';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { App } from './app/app';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      LucideAngularModule.pick({ Home, Info, Flag, UserCheck, ChevronRight, ChevronLeft }),
      HttpClientModule
    )
  ],
});
