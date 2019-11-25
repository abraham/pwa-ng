import { Route } from '@angular/router';

export interface NamedRoute extends Route {
  label: string;
}

export const routes: NamedRoute[] = [
  {
    path: '',
    label: 'Install',
    pathMatch: 'full',
    loadChildren: () => import('./pwa-install/pwa-install.module').then(m => m.PwaInstallModule)
  },
  {
    path: 'manifest',
    label: 'Manifest',
    loadChildren: () => import('./pwa-manifest/pwa-manifest.module').then(m => m.PwaManifestModule)
  },
  {
    path: 'firebase',
    label: 'Firebase',
    loadChildren: () => import('./firebase/firebase.module').then(m => m.FirebaseModule)
  },
];
