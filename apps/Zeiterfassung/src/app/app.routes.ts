import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'userlist',
    pathMatch: 'full',
  },

  {
    path: 'userlist',
    loadComponent: () =>
      import('@zeiterfassung/user-list-feature').then(
        (m) => m.UserListFeatureComponent
      ),
  },

  {
    path: 'user-list-details',
    loadComponent: () =>
      import('@zeiterfassung/user-list-details').then(
        (m) => m.UserListDetailsComponent
      ),
  },
];
