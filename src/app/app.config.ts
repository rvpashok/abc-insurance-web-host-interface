import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AuthModule } from '@auth0/auth0-angular';
import { providePrimeNG } from 'primeng/config';
import { AuthInterceptor } from './services/auth-interceptor.service';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura
        }
    }),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    importProvidersFrom( HttpClientModule,  AuthModule.forRoot({
      domain: 'dev-8vycaujdypum3hac.us.auth0.com',
      clientId: 'mjPJo53yJJEsti1WuTg32WLmyi2CKT6M',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }))
  ]
};
