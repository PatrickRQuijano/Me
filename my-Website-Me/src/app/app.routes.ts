import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        // if path is empty means top of root then
        // use component we tell it
            path: '',
            //path match full required if using empty route
            pathMatch: 'full',
            loadComponent: () => {
                return import('./home/home').then((m) => m.Home)
            }
        },
        {
            path: 'projects',
            loadComponent: () => {
                return import('./projects/projects').then((m) => m.Projects)
            }
        }
];
