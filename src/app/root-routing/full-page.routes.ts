import { Routes } from '@angular/router';
import { NotFoundComponent } from '../root/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app-authentication/app-authentication.module').then(
        (module) => module.AppAuthenticationModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: {
      breadCrumb: '404',
    },
  },
];

export function getFullPageLayoutRoute() {
  return routes;
}
