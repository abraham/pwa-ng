import { Route } from '@angular/router';

export interface NamedRoute extends Route {
  label: string;
}

export const routes: NamedRoute[] = [
  {
    path: '',
    label: 'Install',
    pathMatch: 'full',
    loadChildren: () => import('./install/install.module').then(m => m.InstallModule)
  },
  {
    path: 'manifest',
    label: 'Manifest',
    loadChildren: () => import('./manifest/manifest.module').then(m => m.ManifestModule)
  },
  {
    path: 'firebase',
    label: 'Firebase',
    loadChildren: () => import('./firebase/firebase.module').then(m => m.FirebaseModule)
  },
];
