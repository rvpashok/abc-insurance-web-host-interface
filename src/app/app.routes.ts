import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { AboutusComponent } from './footer-bar/aboutus/aboutus.component';
import { CareersComponent } from './footer-bar/careers/careers.component';
import { ContactUsComponent } from './footer-bar/contact-us/contact-us.component';
import { PressReleaseComponent } from './footer-bar/press-release/press-release.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path:'about-us',component:AboutusComponent, canActivate: [AuthGuard]},
    {path:'contact-us',component:ContactUsComponent},
    {path:'careers',component:CareersComponent},
    {path:'press-release',component:PressReleaseComponent},
    {path:'profile',component:ProfileComponent},
    {
        path:"claim",
        loadChildren: ()=> 
        loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            exposedModule: './PaymentModule'
        }).then(m => m.ClaimsModule)
    },
    {
        path:"insurance",
        loadChildren: ()=> 
        loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './InsuranceModule'
        }).then(m => m.InsuranceDetailsModule)
    }
];
