import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AboutusComponent } from './footer-bar/aboutus/aboutus.component';
import { CareersComponent } from './footer-bar/careers/careers.component';
import { ContactUsComponent } from './footer-bar/contact-us/contact-us.component';
import { PressReleaseComponent } from './footer-bar/press-release/press-release.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ClaimsComponent } from './claims/claims.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';

const mfeInsuranceDomain = environment.production ? environment.mfeInsuranceDomain : 'http://localhost:4201';
const mfePaymentDomain = environment.production ? environment.mfePaymentDomain : 'http://localhost:4201';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'profile',
        component:ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'claims',
        component:ClaimsComponent,
        canActivate: [AuthGuard]
    },
    {
        path:'notifications',
        component:NotificationsComponent,
        canActivate: [AuthGuard]
    },
    {
        path:"premium",
        loadChildren: ()=> 
        loadRemoteModule({
            type: 'module',
            remoteEntry: mfePaymentDomain + '/remoteEntry.js',
            exposedModule: './PaymentModule'
        }).then(m => m.PayPremiumModule),
        canActivate: [AuthGuard]
    },
    {
        path:"insurance",
        loadChildren: ()=> 
        loadRemoteModule({
            type: 'module',
            remoteEntry: mfeInsuranceDomain + '/remoteEntry.js',
            exposedModule: './InsuranceModule'
        }).then(m => m.InsuranceDetailsModule),
        canActivate: [AuthGuard]
    },
    {
        path:'about-us',
        component:AboutusComponent
    },
    {
        path:'contact-us',
        component:ContactUsComponent
    },
    {
        path:'careers',
        component:CareersComponent
    },
    {
        path:'press-release',
        component:PressReleaseComponent
    }
];
