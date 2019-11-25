import { Route } from '@angular/router';
import { FirebaseComponent } from './firebase/firebase.component';
import { PwaInstallComponent } from './pwa-install/pwa-install.component';
import { PwaManifestComponent } from './pwa-manifest/pwa-manifest.component';

export interface NamedRoute extends Route {
  label: string;
}

export const routes: NamedRoute[] = [
  {
    path: '',
    label: 'Install',
    component: PwaInstallComponent,
    pathMatch: 'full'
  },
  {
    path: 'manifest',
    label: 'Manifest',
    component: PwaManifestComponent
  },
  {
    path: 'firebase',
    label: 'Firebase',
    component: FirebaseComponent
  },
];
