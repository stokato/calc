/**
 * Created by "s.t.o.k.a.t.o" on 09.02.2017.
 */

import { Routes, RouterModule } from '@angular/router';

import {AuthComponent} from './auth.component/auth.component';
import {WorkPlaceComponent} from './workplace.component/workplace.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    },

    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'workplace',
        component: WorkPlaceComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [AuthComponent, WorkPlaceComponent];