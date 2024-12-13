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
    path: 'user-detail-feature/:id', // ID als Parameter hinzufügen
    loadComponent: () =>
      import('@zeiterfassung/user-detail-feature').then(
        (m) => m.UserDetailFeatureComponent
      ),
  },
];
