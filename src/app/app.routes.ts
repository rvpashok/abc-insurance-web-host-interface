import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
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
